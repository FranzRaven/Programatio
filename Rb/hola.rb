#! /usr/bin/env ruby

puts "nombre, please...."

name = gets.chomp

def saludo(name)
  saludor =  "que acelga,  #{name} ????"
  return saludor
end

def putex(name)
  putx = "imbécil or not imbécil, #{name}????"
return putx
end


puts "vero o falso????"
resp = gets.chomp

if resp == 'vero'

puts saludo(name)

else

puts putex(name)
end



