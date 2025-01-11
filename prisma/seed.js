const prisma = require("../src/db/db.js");
const { products } = require("../src/seeders/products.js");

const main = async () => {
  const product = await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
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
