import { generateTeamName } from '../generators/SquadNameGen.ts';
import { InsertPlayer } from './insertData/InsPlayer.ts';
import { createClient } from '@supabase/supabase-js';
import { AttribToArray } from '../generators/AttribGenArray.ts';
import { createAttributes } from './insertData/InsAttrib.ts';
import { insertTeamIntoSupabase } from './insertData/InsTeam.ts';

import { correlateTeamsAndPlayers } from './insertData/RecentID.ts';
import { generateName } from '../generators/NamesGen.ts';

const supabaseUrl = 'https://evcsymvmxpqrfbmhtget.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Y3N5bXZteHBxcmZibWh0Z2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwODUyNDgsImV4cCI6MjAyOTY2MTI0OH0.P96yvOfOYAsRJ1YzAUOsYejBw83uwhHEYTIyhnrwDCQ';

const roster =["P","C","1B","2B","3B","SS","LF","CF","RF","2P","RP","CL","DH","R"] 

const supabase = createClient(supabaseUrl, supabaseKey);


const TeamName :string = generateTeamName() // Generate and 
await insertTeamIntoSupabase(TeamName);     //.insert([{name: Teamname}]);
                                            //.from('Teams'); 
let y =roster.length;
console.log("Building a ",y ," Players Team" ); 
let l =1;
for (let i = 0; i < y; i++) {
        console.log(roster[i]);
   
const attribList = await AttribToArray(4,roster[i]);                                  // Generate and insert in table: 
await createAttributes (attribList[0],attribList[1],attribList[2],attribList[3]); //.from('PlayerAttributes'); 
                                                                            //.insert([{pitching: attribList[0], batting: attribList[1], fielding: attribList[2], running: attribList[3] }]);

const NameGen = await generateName();   // Generate and insert in table: 
                                        //.from('Players'); 
await InsertPlayer(NameGen,roster[i],l++);                  //.insert([{name: name}]);

await correlateTeamsAndPlayers()
// Ottieni l'ID dell'ultima riga inserita nella tabella Teams
 }