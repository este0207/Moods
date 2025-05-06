import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";


export default async function POST(req) {
    const userData = req.body.json()
    const userLatitude = userData.latitude
    const userLongitude = userData.longitude
    const userVille = userData.ville
    const userEmail = userData.email

    if (!userData || !userLatitude || !userLongitude || !userVille) {
        return NextResponse.json({ status: "missing arguments" })

    }
    else {

        try {
            const updateUser = await prisma.user.update({
                where: {
                    email: userEmail,
                },
                data: {
                    latitude: userLatitude,
                    longitude: userLongitude,
                    ville: userVille
                },
            })
            if (updateUser.ok) {
                console.log(updateUser)
            }
            else {
                return NextResponse.json({ status: "error failed to fetch users" })
            }

        } catch (error) {
            return NextResponse.json({ status: "something went wrong" })
        }
    }

}