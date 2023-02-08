-- DropForeignKey
ALTER TABLE "Workspace" DROP CONSTRAINT "Workspace_ImageId_fkey";

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "detail" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "startAt" DROP NOT NULL,
ALTER COLUMN "limitAt" DROP NOT NULL,
ALTER COLUMN "priority" SET DEFAULT 'nomal';

-- AlterTable
ALTER TABLE "Workspace" ALTER COLUMN "ImageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Workspace" ADD CONSTRAINT "Workspace_ImageId_fkey" FOREIGN KEY ("ImageId") REFERENCES "Attachment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
