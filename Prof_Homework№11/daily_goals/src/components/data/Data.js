import React, { useEffect } from "react";

export default function Data({ updateFormData, dataForm }) {
    let days = [
        {
            name: "Monday",
            goals: [
                { goal: "Купить дверь", priority: 1 },
                { goal: "Сходить в зал", priority: 0 },
            ],
        },
        {
            name: "Tuesday",
            goals: [
                { goal: "Купить окно", priority: 1 },
                { goal: "Сходить в зал", priority: 1 },
                { goal: "Купить ручку", priority: 0 },
                { goal: "Помыть кота", priority: 0 },
                { goal: "Починить свет", priority: 0 },
            ],
        },
        { name: "Wednesday", goals: [] },
        { name: "Thursday", goals: [] },
        { name: "Friday", goals: [{ goal: "Зарядить воду", priority: 1 }] },
        { name: "Saturday", goals: [] },
        { name: "Sunday", goals: [] },
    ];

    const { day, goal, priority } = dataForm;


    useEffect(() => {
        // Find the day in the array and add a new goal to its goals
        let updatedDays = days.map((elem) => {
            if (elem.name === day) {
                return {
                    ...elem,
                    goals: [...elem.goals, { goal, priority }],
                };
            }
            return elem;
        });
    
        updateFormData(updatedDays);
    }, [day]);
    
    }
