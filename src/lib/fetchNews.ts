"use client"

import { NewsItem } from '@/types/news'
import React, { useEffect, useState } from 'react'

// Define the fetchNews function inside the component file or import it
const fetchNews = async (category = "", search = "") => {
    try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f645004b10ec464a8e797926475a0a73`;

        if (category) {
            url += `&category=${category}`;
        }

        if (search) {
            url += `&q=${encodeURIComponent(search)}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const news = await response.json();
        return news.articles || [];
    } catch (error) {
        console.error('Error fetching news data:', error);
        return [];
    }
};

export default fetchNews