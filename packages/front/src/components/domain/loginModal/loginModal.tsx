import { useCallback } from 'react';

import { useDropzone } from 'react-dropzone';

import { FindCurrentUser } from 'domain/auth/findCurrentUser';
import { FindUserById } from 'domain/auth/findUserById';
import { useAuth } from 'hook/auth/useAuth';
import { FirebaseGetUrl } from 'lib/firebaseGetUrl';
import { FirebaseUpload } from 'lib/firebaseUpload';

export const LoginModal = () => {
  // firebase login
  const { googleLogin, logout } = useAuth();

  // 画像アップロードお試し
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const res = await FirebaseUpload(acceptedFiles);
    // const res = await FirebaseGetUrl({name: 'unko', fullpath: 'images/bot_intents.jpg'});
    console.log(res);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <button onClick={googleLogin}>googleログイン</button>
      <button onClick={logout}>ログアウト</button>

      <button onClick={() => {FindUserById(1);}}>サーチ！</button>
      <button onClick={() => {FindCurrentUser();}}>自分</button>


      <div
        {...getRootProps()}
        className='w-full'
      >
        <input {...getInputProps()} />
        <div className='w-full text-center'>
          {
            isDragActive ?
              <div className='w-full bg-sky-500 ease-in duration-100 py-10'>
                <h1 className='text-5xl font-bold'>画像アップロード</h1>
                <p className='py-6'>ここに画像をドロップ</p> 
              </div>
              :
              <div className='w-full hover:bg-sky-500 ease-in duration-100 py-10'>
                {
                  <>
                    <h1 className='text-5xl font-bold'>画像アップロード</h1>
                    <p className='py-6'>画像をドラック＆ドロップまたは、クリックでアップロード</p>
                  </>
                }
              </div>
          }
        </div>
      </div>
    </div>
  );
};