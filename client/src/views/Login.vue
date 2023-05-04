<script setup lang="ts">
import { loadScript, rest } from '@/model/myFetch';
async function googleLogin()
{
    await loadScript('https://accounts.google.com/gsi/client', 'google-login');
    const client = google.accounts.oauth2.initTokenClient({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          scope: 'https://www.googleapis.com/auth/calendar.readonly \
                  https://www.googleapis.com/auth/contacts.readonly',
          callback: async (tokenResponse) => {
            console.log(tokenResponse);
            const me = await rest(
                'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses',
                null, undefined, {
                    "Authorization": "Bearer " + tokenResponse.access_token
                }
                
                );
            console.log(me);
            const calendar = await rest('https://www.googleapis.com/calendar/v3/calendars/primary/events',
                null, undefined, {
                    "Authorization": "Bearer " + tokenResponse.access_token
                })
            console.log(calendar);
          },
        });
    client.requestAccessToken();
}
</script>

<template>
    <div>
        <h1 class="title">
            Login
        </h1>
        <h2 class="subtitle">
            If you got here then you are not logged in. <br>
            To login just click the button on the top right corner.
        </h2>
        <p>
            <button class="button is-primary" @click="googleLogin">
                Login With Google
            </button>
        </p>
    </div>
</template>

<style scoped>

</style>