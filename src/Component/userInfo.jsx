import React from 'react'

function userInfo({ session, supabase }) {
    async function signOut() {
        await supabase.auth.signOut();
    }
    return (
        <div class="dropdown d-flex my-1">
            <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {session?.user?.user_metadata?.name}
            </button>
            <ul class="dropdown-menu">
                <div class="d-grid">
                    <button class="btn btn-light btn-sm" type="button">Subscriptions</button>
                    <button class="btn btn-light btn-sm" type="button">Liked videos</button>
                    <button class="btn btn-light btn-sm" type="button" onClick={signOut}>Sign out</button>
                </div>
            </ul>
        </div>
    )
}

export default userInfo