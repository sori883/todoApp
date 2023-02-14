/*
  Warnings:

  - A unique constraint covering the columns `[uid,email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Attachment` DROP FOREIGN KEY `Attachment_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `Attachment` DROP FOREIGN KEY `Attachment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Project` DROP FOREIGN KEY `Project_workspaceId_fkey`;

-- DropForeignKey
ALTER TABLE `Tag` DROP FOREIGN KEY `Tag_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Tag` DROP FOREIGN KEY `Tag_workspaceId_fkey`;

-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_userId_fkey`;

-- DropForeignKey
ALTER TABLE `TasksOnTags` DROP FOREIGN KEY `TasksOnTags_tagId_fkey`;

-- DropForeignKey
ALTER TABLE `TasksOnTags` DROP FOREIGN KEY `TasksOnTags_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `TasksOnUsers` DROP FOREIGN KEY `TasksOnUsers_taskId_fkey`;

-- DropForeignKey
ALTER TABLE `TasksOnUsers` DROP FOREIGN KEY `TasksOnUsers_userId_fkey`;

-- DropForeignKey
ALTER TABLE `UsersOnWorkspaces` DROP FOREIGN KEY `UsersOnWorkspaces_userId_fkey`;

-- DropForeignKey
ALTER TABLE `UsersOnWorkspaces` DROP FOREIGN KEY `UsersOnWorkspaces_workspaceId_fkey`;

-- DropForeignKey
ALTER TABLE `Workspace` DROP FOREIGN KEY `Workspace_ImageId_fkey`;

-- DropIndex
DROP INDEX `User_uid_key` ON `User`;

-- AlterTable
ALTER TABLE `Tag` MODIFY `color` ENUM('default', 'green', 'brown', 'grey', 'orange', 'yellow', 'blue', 'purple', 'red', 'pink', 'indigo') NOT NULL DEFAULT 'default';

-- AlterTable
ALTER TABLE `Task` MODIFY `detail` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Workspace` MODIFY `detail` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `TasksOnTags_taskId_idx` ON `TasksOnTags`(`taskId`);

-- CreateIndex
CREATE INDEX `TasksOnUsers_taskId_idx` ON `TasksOnUsers`(`taskId`);

-- CreateIndex
CREATE UNIQUE INDEX `User_uid_email_key` ON `User`(`uid`, `email`);

-- CreateIndex
CREATE INDEX `UsersOnWorkspaces_userId_idx` ON `UsersOnWorkspaces`(`userId`);

-- RenameIndex
ALTER TABLE `Attachment` RENAME INDEX `Attachment_taskId_fkey` TO `Attachment_taskId_idx`;

-- RenameIndex
ALTER TABLE `Attachment` RENAME INDEX `Attachment_userId_fkey` TO `Attachment_userId_idx`;

-- RenameIndex
ALTER TABLE `Comment` RENAME INDEX `Comment_taskId_fkey` TO `Comment_taskId_idx`;

-- RenameIndex
ALTER TABLE `Comment` RENAME INDEX `Comment_userId_fkey` TO `Comment_userId_idx`;

-- RenameIndex
ALTER TABLE `Project` RENAME INDEX `Project_userId_fkey` TO `Project_userId_idx`;

-- RenameIndex
ALTER TABLE `Project` RENAME INDEX `Project_workspaceId_fkey` TO `Project_workspaceId_idx`;

-- RenameIndex
ALTER TABLE `Tag` RENAME INDEX `Tag_userId_fkey` TO `Tag_userId_idx`;

-- RenameIndex
ALTER TABLE `Tag` RENAME INDEX `Tag_workspaceId_fkey` TO `Tag_workspaceId_idx`;

-- RenameIndex
ALTER TABLE `Task` RENAME INDEX `Task_projectId_fkey` TO `Task_projectId_idx`;

-- RenameIndex
ALTER TABLE `Task` RENAME INDEX `Task_userId_fkey` TO `Task_userId_idx`;

-- RenameIndex
ALTER TABLE `TasksOnTags` RENAME INDEX `TasksOnTags_tagId_fkey` TO `TasksOnTags_tagId_idx`;

-- RenameIndex
ALTER TABLE `TasksOnUsers` RENAME INDEX `TasksOnUsers_userId_fkey` TO `TasksOnUsers_userId_idx`;

-- RenameIndex
ALTER TABLE `UsersOnWorkspaces` RENAME INDEX `UsersOnWorkspaces_workspaceId_fkey` TO `UsersOnWorkspaces_workspaceId_idx`;
