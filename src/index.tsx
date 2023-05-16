import './index.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import ImgInfo from './img_info_landing.webp';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
    <StrictMode>
        <img src={ImgInfo} alt={'Girl waving'} />
    </StrictMode>
);
