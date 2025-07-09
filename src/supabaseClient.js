import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://anwpqaxcffwvmeuwlysi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFud3BxYXhjZmZ3dm1ldXdseXNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwODA5OTMsImV4cCI6MjA2NzY1Njk5M30.aBWLRGfee4HaUdtHJtygtGc_vohmFbDMR8K18p2heaI'
export const supabase = createClient(supabaseUrl, supabaseKey)
