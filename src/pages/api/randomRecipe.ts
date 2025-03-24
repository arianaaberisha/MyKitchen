import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const number = req.query.number || 1; 
    const apiKey = process.env.SPOONACULAR_API_KEY;

    try {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${apiKey}`
        );

        if (!response.ok) {
            return res.status(500).json({ error: 'Failed to fetch data' });
        }

        const data = await response.json();

       
        return res.status(200).json(data.recipes || []);
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while fetching the recipes.' });
    }
}



