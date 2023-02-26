import { getStorage, ref, uploadBytes } from 'firebase/storage';

// Create a root reference
const storage = getStorage();

export type UploadResult = {
  name: string;
  fullpath: string;
}

export const FirebaseUpload = async (files: File[]): Promise<UploadResult[]> => {
  // ここでアップロードした画像の名前とパスの配列を作成する
  return await Promise.all(files.map(async (file) => {
    const storageRef = ref(storage, `images/${file.name}`);

    const snapshot = await uploadBytes(storageRef, file);
    return ({
      name: snapshot.metadata.name,
      fullpath: snapshot.metadata.fullPath
    });
  }));

};