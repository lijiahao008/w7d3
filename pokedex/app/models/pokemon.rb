class Pokemon < ActiveRecord::Base
  TYPES = [
    "bug",
    "dragon",
    "electric",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water"
  ]

  has_many :items

  validates :attack, :defense, :image_url, :name, :poke_type, presence: true
  validates :name, uniqueness: true
  validates :attack, :defense, numericality: true
  validates :poke_type, inclusion: { in: TYPES }
end
