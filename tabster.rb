#!/usr/bin/env ruby

def server
  system("crystal src/tabster.cr")
end

def console
  system("icr -r ./src/core.cr")
end

if ARGV.size > 0
  arg = ARGV[0].downcase
  if arg == 'console' || arg == 'c'
    console
  elsif arg == 'server' || arg == 's'
    server
  else
    server
  end
else
  server
end
