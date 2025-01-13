const prisma = require("../src/db/db.js");
const { products } = require("../src/seeders/products.js");

const main = async () => {
  const product = await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });

  const user = await prisma.user.create({
    data: {
      id: "4a120926-d08d-4321-9b8e-81c201ea00c1",
      name: "user_12",
      username: "user_12",
      email: "user_12@gmail.com",
      password: "UserSatu2",
    },
  });
};

main()
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect;
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
