import { generateTeamName } from '../generators/SquadNameGen.ts';
import { generateName } from '../generators/NamesGen.ts';
import { createClient } from '@supabase/supabase-js';
import { AttribToArray } from '../generators/AttribGenArray.ts';
import { createAttributes } from '../DB_functions/InsAttrib.ts';
import { insertTeamIntoSupabase } from './InsTeam.ts';

const supabaseUrl = 'https://evcsymvmxpqrfbmhtget.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Y3N5bXZteHBxcmZibWh0Z2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwODUyNDgsImV4cCI6MjAyOTY2MTI0OH0.P96yvOfOYAsRJ1YzAUOsYejBw83uwhHEYTIyhnrwDCQ';


const supabase = createClient(supabaseUrl, supabaseKey);

const attribList = await AttribToArray(4); 
createAttributes (attribList[0],attribList[1],attribList[2],attribList[3]); 
const TeamName :string = generateTeamName() 
insertTeamIntoSupabase(TeamName);

