import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://evcsymvmxpqrfbmhtget.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Y3N5bXZteHBxcmZibWh0Z2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwODUyNDgsImV4cCI6MjAyOTY2MTI0OH0.P96yvOfOYAsRJ1YzAUOsYejBw83uwhHEYTIyhnrwDCQ';

const supabase = createClient(supabaseUrl, supabaseKey);

const updatePlayerAttributes = async (playerId: number, teamId: number, attributesId: number) => {
    try {
        const { data, error } = await supabase
            .from('Players')
            .update({ pattrib_id: attributesId , team_id:teamId})
            .match({ player_id: playerId });

        if (error) {
            throw error;
        }

        console.log('Aggiornamento riuscito:', data);
        return data;
    } catch (error) {
        console.error('Errore durante l\'aggiornamento:', error.message);
        return null;
    }
};

const { data: lastTeam } = await supabase
        .from('Teams')
        .select('team_id')
        .order('team_id', { ascending: false })
        .limit(1);

     //Ottieni l'ID dell'ultima riga inserita nella tabella PlayerAttributes
    const { data: lastAttributes } = await supabase
        .from('PlayerAttributes')
        .select('pattribute_id')
        .order('pattribute_id', { ascending: false })
        .limit(1);
    
    // Ottieni l'ID dell'ultima riga inserita nella tabella Players
    const { data: lastPlayer } = await supabase
        .from('Players')
        .select('player_id')
        .order('player_id', { ascending: false })
        .limit(1);
        
   if (lastTeam && lastPlayer && lastAttributes ) {
    
        //const teamIds =parseInt(lastTeam[0].team_id, 10) ;
        const teamIds =parseInt(lastTeam[0].team_id, 10 );
        console.log(teamIds);
        const attributesId  =parseInt(lastAttributes[0].pattribute_id, 10) ; 
        console.log(attributesId);
        const playerIds =parseInt(lastPlayer[0].player_id, 10);  
        console.log(playerIds);
        updatePlayerAttributes(playerIds, attributesId, teamIds);  // Aggiorna il giocatore con ID 1 impostando l'ID degli attributi a 100

    }
// Esempio di utilizzo della funzione
