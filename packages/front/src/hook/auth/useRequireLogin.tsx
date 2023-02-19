import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useCurrentUser } from 'hook/auth/useCurrentUser';

export function useRequireLogin() {
  const { isAuthChecking, currentUser } = useCurrentUser();
  const router = useRouter();
  
  useEffect(()=>{
    console.log(isAuthChecking);
    if(isAuthChecking) return;
    // 未ログインだったのでリダイレクト 
    if(!currentUser) router.push('/');
  },[isAuthChecking, currentUser]);
}