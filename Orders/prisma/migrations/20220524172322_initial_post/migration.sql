
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" 

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);


ALTER TABLE "product" ADD COLUMN




CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "product" INTEGER NOT NULL,
    "priductId" 

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);


ALTER TABLE "Post" ADD CONSTRAINT "Post_productId_fkey" FOREIGN KEY ("productId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
