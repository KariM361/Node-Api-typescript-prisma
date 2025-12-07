import bcrypt from 'bcrypt';
import { prisma } from '../src/prisma';
import { userRoutes } from '../src/routes/userRoutes';

//Asynkron main-function so kører vores seed-data
const main = async () => {

// sletter eksisterende data i bruger tabellen
    await prisma.user.deleteMany();



//Opretter en testbruger i databasen
    const user = await prisma.user.create({
        data: {
            firstname: 'Test',
            lastname: 'Bruger',
            email: 'test@example.com',//Login-email
            password: await bcrypt.hash('password', 10), //Hashing af password
            role: 'USER', //Bruger rolle
            isActive: true //Brugeren er aktiv og må selv logge ind
        },
    });

    //udskriver i terminalen at brugeren er oprettet
    console.log('Seed completed for users:', user);
};
//Kører main-funktionen
main()
    .then(()=> prisma.$disconnect())//Lukker db forbindelsen når alt er ok
    .catch((e) =>{
        console.error(e);
        prisma.$disconnect();
        process.exit(1);
    });


    console.log("Seed completed for users:", userRoutes);

    // Opretter mange drivmidler i databasen
const fueltypes = await prisma.fueltypes.createMany({
  data: [
    { name: "Benzin" }, 
    { name: "Diesel" },
    { name: "Hybrid" }, 
    { name: "Electricity" }, 
    { name: "Coffee" } 
  ]}
);
// Udskriver i terminalen at drivmidler er oprettet
console.log("Seed completed for fueltypes:", fueltypes);


