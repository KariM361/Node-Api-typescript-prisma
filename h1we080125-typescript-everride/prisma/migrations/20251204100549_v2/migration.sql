/*
  Warnings:

  - You are about to drop the column `brand` on the `cars` table. All the data in the column will be lost.
  - You are about to drop the `brands` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `brandId` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cars` DROP COLUMN `brand`,
    ADD COLUMN `brandId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `brands`;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL,
    `isActive` BOOLEAN NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `brand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `logoUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cars` ADD CONSTRAINT `cars_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
