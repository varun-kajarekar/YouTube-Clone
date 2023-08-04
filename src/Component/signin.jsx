import React from 'react'


function signin({session,supabase}) {
    async function googleSignIn() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/youtube'
            }
        }
        );
        error?console.log(error):console.log("success")
    }
  return (
    <>
        <button className='btn btn-light  my-1' onClick={googleSignIn}>Sign In with Google</button>
    </>
  )
}

export default signin