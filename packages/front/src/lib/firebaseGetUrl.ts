import { getDownloadURL, getStorage, ref } from "firebase/storage";

import { UploadResult } from 'lib/firebaseUpload';

// Create a root reference
const storage = getStorage();

export const FirebaseGetUrl = async (metadata: UploadResult) => {
  return await getDownloadURL(ref(storage, metadata.fullpath));
};