export interface Resource {
  title: string;
  description: string;
  url: string;
  type: 'video' | 'article' | 'tool';
  category: string;
}

export interface DadJoke {
  setup: string;
  punchline: string;
}