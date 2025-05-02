import { NextResponse } from "next/server";
import { Mistral } from '@mistralai/mistralai';

export async function POST(req) {
    const data = await req.json()
    const prompt = data.prompt
    const apiKey = process.env.MISTRAL_API_KEY;
    if(!data){
        return NextResponse.json({status:"missing prompt"})
    }
    try{
        const client = new Mistral({ apiKey: apiKey });

        const chatResponse = await client.agents.complete({
            agentId: "ag:06e16952:20250502:serena:858cfa4d",
            messages: [{ role: 'user', content: prompt}],
        });
        return NextResponse.json({response:chatResponse.choices[0].message.content})
    
        

    }catch(err){
        return NextResponse.json({status:"Serena s'est endormie, veuillez réessayer plus tard"})

    }
}

