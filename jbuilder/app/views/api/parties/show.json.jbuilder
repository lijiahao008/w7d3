
json.name @party.name
json.location @party.location


# json.guests @party.guests.each do |guest|
#   json.partial! 'api/guests/guest', {guest: guest, gifts: guest.gifts}
# end

# json.guests @party.guests, json.partial! 'api/guests/guest', as: :guest
json.guests do
  json.partial! 'api/guests/guest', collection: @party.guests, as: :guest
end
