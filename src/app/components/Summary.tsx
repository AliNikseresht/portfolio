"use client";
import { Box, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface CountData {
    yearsOfExperience: number;
    projectsCompleted: number;
    technologiesMastered: number;
    totalContributions: number;
}

type CountKey = keyof CountData;

const Summary = () => {
    const listItemTextStyle = { color: "#c3c3c3", ml: "0.7em" };

    const counts: CountData = {
        yearsOfExperience: 1,
        projectsCompleted: 9,
        technologiesMastered: 12,
        totalContributions: 855
    };

    const [animatedCounts, setAnimatedCounts] = useState<CountData>({
        yearsOfExperience: 0,
        projectsCompleted: 0,
        technologiesMastered: 0,
        totalContributions: 0
    });

    const animateCounts = () => {
        const intervals: NodeJS.Timeout[] = [];

        Object.keys(counts).forEach((key) => {
            let counter = 0;
            const interval = setInterval(() => {
                counter++;
                setAnimatedCounts(prevState => ({
                    ...prevState,
                    [key]: counter
                }));

                if (counter === counts[key as keyof CountData]) {
                    clearInterval(interval);
                }
            }, key === 'totalContributions' ? 50 : 100);

            intervals.push(interval);
        });

        return intervals;
    };

    useEffect(() => {
        const intervalIds = animateCounts();
        return () => {
            intervalIds.forEach(id => clearInterval(id));
        };
    }, []);

    const items: { key: CountKey; primary: string; secondary: string; }[] = [
        { key: 'yearsOfExperience', primary: 'Years of', secondary: 'experience' },
        { key: 'projectsCompleted', primary: 'Projects', secondary: 'completed' },
        { key: 'technologiesMastered', primary: 'Technologies', secondary: 'mastered' },
        { key: 'totalContributions', primary: 'Total', secondary: 'Contributions' }
    ];

    return (
        <Box sx={{ display: "flex", mt: "3em" }}>
            {items.map(item => (
                <ListItem key={item.key}>
                    <Typography variant="h2" color="#c3c3c3">
                        {animatedCounts[item.key]}
                    </Typography>
                    <ListItemText
                        primary={<Typography variant="body1" sx={{ color: "#c3c3c3" }}>{item.primary}</Typography>}
                        secondary={<Typography variant="body2" sx={{ color: "#c3c3c3" }}>{item.secondary}</Typography>}
                        sx={listItemTextStyle}
                    />
                </ListItem>
            ))}
        </Box>
    );
}

export default Summary;
