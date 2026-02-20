export interface Character {
  name: string;
  gender: string;
  birth_year: string;
  url: string;
}

export interface ApiResponse {
  next: string | null;
  results: Character[];
}