import { Player } from './../../../common/class'   ; // Assicurati di importare la classe Player dal file class.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://evcsymvmxpqrfbmhtget.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Y3N5bXZteHBxcmZibWh0Z2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwODUyNDgsImV4cCI6MjAyOTY2MTI0OH0.P96yvOfOYAsRJ1YzAUOsYejBw83uwhHEYTIyhnrwDCQ';

const supabase = createClient(supabaseUrl, supabaseKey);
export async function CallBatter(lineup: number, team_id: number): Promise<Player | null> {
    let as = lineup;
    if (lineup === 0 || lineup === 10) {
        as = 1;
    }
    // Ottieni i dati del giocatore dal database Supabase
    const { data, error } = await supabase
        .from('Players')
        .select('player_id, pname, lineup, role, pattrib_id, pstats_id')
        .eq('lineup', as)
        .eq('team_id', team_id)
        .single();

    if (error) {
        console.error('Errore durante il recupero del giocatore:', error.message);
        return null;
    }

    if (!data) {
        console.error(`Nessun giocatore trovato per il ruolo ${lineup} e il team ID ${team_id}`);
        return null;
    }
    const { data: attributesData, error: attributesError } = await supabase
        .from('PlayerAttributes')
        .select('pitching, batting, fielding, running')
        .eq('pattribute_id', data.pattrib_id)
        .single();

    if (attributesError) {
        console.error('Errore durante il recupero degli attributi del giocatore:', attributesError.message);
        return null;
    }

    if (!attributesData) {
        console.error('Attributi del giocatore non trovati');
        return null;
    }
    const { pitching, batting, fielding, running } = attributesData;
    console.log('Loading Attributes:');
    const t= new Player(data.player_id, data.pname, data.role, data.lineup, data.pstats_id, pitching, batting, fielding, running);
    console.log('Player:',t,);
    return t;
}

//Esempio di utilizzo dello script
 /*async function exampleUsage() {
    const lineup = 0; // Il ruolo del giocatore che si desidera ottenere
    const team_id = 115; // L'ID del team a cui il giocatore appartiene
    const player = await CallBatter(lineup, team_id);
    if (player) {
       
    } else {
        console.log(`Nessun giocatore trovato per il ruolo ${lineup} e il team ID ${team_id}`);
    }
}

// Esegui l'esempio di utilizzo dello script
exampleUsage();
  */