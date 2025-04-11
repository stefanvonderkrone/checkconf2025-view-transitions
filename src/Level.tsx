import { FC, ReactNode, useMemo } from 'react';
import tile22 from './assets/kenney_pixel-platformer/Tiles/tile_0022.png';
import tile104 from './assets/kenney_pixel-platformer/Tiles/tile_0104.png';
import tile122 from './assets/kenney_pixel-platformer/Tiles/tile_0122.png';

const TILE_MAPPING: Record<string, string> = {
    1: tile22,
    2: tile104,
    3: tile122,
};

const Level: FC<{
    blueprint: string;
    background: ReactNode;
    tileSize: number;
    pixelScale: number;
}> = ({ blueprint, background, tileSize, pixelScale }) => {
    const level = useMemo(() => {
        const length = blueprint.length;
        const tiles: ReactNode[] = Array(length);
        for (let i = 0, x = 0, y = 0; i < length; i++, x++) {
            const char = blueprint[i];
            tiles[i] = null;
            if (char === '\n') {
                y++;
                x = -1;
                continue;
            }
            if (char === ' ') {
                continue;
            }
            const img = TILE_MAPPING[char];
            if (!img) {
                continue;
            }
            tiles[i] = (
                <span
                    className="absolute"
                    style={{
                        top: `calc(${y} * var(--tile-size))`,
                        left: `calc(${x} * var(--tile-size))`,
                        width: 'calc(var(--tile-size) + 1px)',
                        height: 'calc(var(--tile-size) + 1px)',
                        backgroundImage: `url("${img}")`,
                        backgroundSize: 'var(--tile-size)',
                        imageRendering: 'pixelated',
                    }}
                    data-x={x}
                    data-y={y}
                    key={i}
                />
            );
        }
        return tiles;
    }, [blueprint]);

    return (
        <div
            className="absolute top-0 left-0 h-full w-full overflow-hidden"
            style={{
                '--tile-size': `calc(${tileSize * pixelScale}rem / 8)`,
            }}
        >
            {level}
        </div>
    );
};

export default Level;
