json.array! @guests.each do |guest|
  next if guest.age < 40 || guest.age > 50
  json.name guest.name
  json.age guest.age
  json.favorite_color guest.favorite_color
end
