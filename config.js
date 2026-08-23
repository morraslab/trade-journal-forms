// Shared config for both journal pages.
//
// This file is PUBLIC. Only ever put the publishable key here -- it is
// designed to be readable in page source. Row Level Security means it can
// call exactly two functions per page and read no tables at all.
//
// The secret key belongs in GitHub Actions secrets. Never here.
window.JOURNAL_CONFIG = {
  SUPABASE_URL: "https://rztwvqmdpjgyentvrsqo.supabase.co",
  PUBLISHABLE_KEY: "sb_publishable_eAPTFw8RewJBLq781fbHsA_PjTp7HU3"
};
