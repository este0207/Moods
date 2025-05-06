import { NextResponse } from "next/server";


export default async function POST(req){
    const userData = req.json()
    const userVille = userData.ville
    const userLatitude = userData.Latitude
    const userLongitude = userData.Longitude
    if(!userData || !userLatitude  || !userLongitude  || !userVille){
        return NextResponse.json({status:"missing arguments"})
    }


    try{
        const findUsers = await prisma.user.findMany({
            where: {
                ville: userVille,
            },
            select: {
                latitude: true,
                longitude: true,
                username: true,
              },
          })
          if(findUsers){
            return NextResponse.json(findUsers)
          }
          else{
            return NextResponse.json({status:"failed to fetch users / find nearby Users"})
          }
    
        
    } catch(err){
        return NextResponse.json(err)

    }

  
}