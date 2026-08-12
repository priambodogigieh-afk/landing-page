import React from 'react';

export interface Client {
  name: string;
  file: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface Post {
  title: string;
  img: string;
  alt: string;
}
