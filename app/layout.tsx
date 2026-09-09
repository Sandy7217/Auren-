import type { Metadata } from 'next';
import './styles.css';
import { Header, Footer } from '@/components/chrome';
export const metadata: Metadata = { title: { default: 'AUREN — Timeless style. Modern you.', template: '%s | AUREN' }, description: 'A considered wardrobe of premium Western and Indo-Western pieces for the modern woman.' };
export default function Layout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><Header />{children}<Footer /></body></html>; }
