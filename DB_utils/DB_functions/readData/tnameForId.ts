import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://evcsymvmxpqrfbmhtget.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Y3N5bXZteHBxcmZibWh0Z2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwODUyNDgsImV4cCI6MjAyOTY2MTI0OH0.P96yvOfOYAsRJ1YzAUOsYejBw83uwhHEYTIyhnrwDCQ';


const supabase = createClient(supabaseUrl, supabaseKey);

// Funzione per ottenere il nome della squadra dato il team_id
export async  function getTeamName(team_id: number): Promise<string > {
    const { data, error } = await supabase
        .from('Teams')
        .select('tname')
        .eq('team_id', team_id)
        .single();

    if (error) {
        console.error('Errore durante il recupero del nome della squadra:', error.message);
        return "" ;
    }

    // Ritorna il nome della squadra
    return data ? data.tname : null;
}

/* Esempio di utilizzo della funzione
async function exampleUsage() {
    const team_id = 115; // Il team_id da cui si desidera ottenere il nome della squadra
    const teamname = await getTeamName(team_id);
    if (teamname) {
        console.log(`Il nome della squadra con team_id ${team_id} è: ${teamname}`);
    } else {
        console.log(`Nessun nome di squadra trovato per team_id ${team_id}`);
    }
}

// Esegui l'esempio di utilizzo della funzione
exampleUsage();
*/