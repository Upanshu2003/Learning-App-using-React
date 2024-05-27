import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://bybnlqsmldmmfzssbpcc.supabase.co";
const supabaseAnonKey = 
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5Ym5scXNtbGRtbWZ6c3NicGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1Mzk0MTMsImV4cCI6MjAyOTExNTQxM30.N4m8p7uyLPV5foAUdsSvGapi_fsKCElDXWHjilnB_is";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})