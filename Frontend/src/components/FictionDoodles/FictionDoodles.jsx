import "./FictionDoodles.css";

const GLOBAL_SIZE_BOOST = 1.5;

const notePool = Array.from(
  { length: 20 },
  (_, i) => `/images/note${i + 1}.png`
);

const arrowPool = Array.from(
  { length: 4 },
  (_, i) => `/images/arrow${i + 1}.png`
);

function createSeededRandom(seed) {
  let h = 2166136261;

  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }

  return function random() {
    h += h << 13;
    h ^= h >>> 7;
    h += h << 3;
    h ^= h >>> 17;
    h += h << 5;

    return ((h >>> 0) % 1000) / 1000;
  };
}

function getTemplatePositions(templateName, isReversed) {
  const innerSide = isReversed ? "innerLeft" : "innerRight";

  const templates = {
    splitDiagonalA: [
      {
        type: "note",
        zone: "farLeft",
        top: 6,
        baseWidth: 105,
        rotation: -28,
      },
      {
        type: "note",
        zone: "farRight",
        top: 96,
        baseWidth: 92,
        rotation: 24,
      },
      {
        type: "note",
        zone: "innerRight",
        top: 52,
        baseWidth: 88,
        rotation: 18,
      },
    ],

    splitDiagonalB: [
      {
        type: "note",
        zone: "farRight",
        top: 8,
        baseWidth: 100,
        rotation: 30,
      },
      {
        type: "note",
        zone: "farLeft",
        top: 94,
        baseWidth: 90,
        rotation: -26,
      },
      {
        type: "note",
        zone: "innerLeft",
        top: 52,
        baseWidth: 88,
        rotation: -18,
      },
    ],

    topAndSide: [
      {
        type: "note",
        zone: "innerLeft",
        top: 2,
        baseWidth: 92,
        rotation: -20,
      },
      {
        type: "note",
        zone: "farRight",
        top: 58,
        baseWidth: 105,
        rotation: 28,
      },
      {
        type: "note",
        zone: "farLeft",
        top: 82,
        baseWidth: 85,
        rotation: -14,
      },
    ],

    sideAndBottom: [
      {
        type: "note",
        zone: "farLeft",
        top: 42,
        baseWidth: 108,
        rotation: -24,
      },
      {
        type: "note",
        zone: "innerRight",
        top: 102,
        baseWidth: 88,
        rotation: 22,
      },
      {
        type: "note",
        zone: "farRight",
        top: 18,
        baseWidth: 90,
        rotation: 20,
      },
    ],

    notesPlusArrow: [
      {
        type: "note",
        zone: "farLeft",
        top: 8,
        baseWidth: 102,
        rotation: -26,
      },
      {
        type: "note",
        zone: "farRight",
        top: 94,
        baseWidth: 92,
        rotation: 24,
      },
      {
        type: "note",
        zone: "innerLeft",
        top: 48,
        baseWidth: 88,
        rotation: -18,
      },
      {
        type: "arrow",
        zone: innerSide,
        top: 52,
        baseWidth: 120,
        rotation: isReversed ? -8 : 8,
      },
    ],
  };

  return templates[templateName];
}

function getTemplateName(articleIndex) {
  if (articleIndex % 3 === 0) return "notesPlusArrow";

  const cycle = articleIndex % 4;

  if (cycle === 0) return "splitDiagonalA";
  if (cycle === 1) return "splitDiagonalB";
  if (cycle === 2) return "topAndSide";
  return "sideAndBottom";
}

function getUniqueNotes(articleIndex, count) {
  const start = (articleIndex * 3) % notePool.length;
  const notes = [];

  for (let i = 0; i < count; i++) {
    notes.push(notePool[(start + i) % notePool.length]);
  }

  return notes;
}

function getArrow(articleIndex) {
  return arrowPool[articleIndex % arrowPool.length];
}

function getSafeLeft(zone, rand) {
  switch (zone) {
    case "farLeft":
      return 10 + rand() * 6;

    case "innerLeft":
      return 30 + rand() * 8;

    case "innerRight":
      return 62 + rand() * 8;

    case "farRight":
      return 84 + rand() * 6;

    default:
      return 12 + rand() * 8;
  }
}

function getSizeMultiplier(pos, rand) {
  const sizeTierRoll = rand();
  let sizeMultiplier;

  if (pos.type === "arrow") {
    sizeMultiplier = 3 + rand() * 1.5;
  } else {
    if (sizeTierRoll < 0.25) {
      sizeMultiplier = 1 + rand() * 0.5;
    } else if (sizeTierRoll < 0.6) {
      sizeMultiplier = 1.6 + rand() * 0.8;
    } else if (sizeTierRoll < 0.9) {
      sizeMultiplier = 2.4 + rand() * 1;
    } else {
      sizeMultiplier = 3.2 + rand() * 0.8;
    }
  }

  if (
    pos.type === "note" &&
    (pos.zone === "innerLeft" || pos.zone === "innerRight")
  ) {
    sizeMultiplier *= 0.78;
  }

  return sizeMultiplier;
}

function buildDoodles(slug, isReversed, articleIndex) {
  const rand = createSeededRandom(
    `${slug}-${articleIndex}-${isReversed ? "rev" : "std"}`
  );

  const templateName = getTemplateName(articleIndex);
  const basePositions = getTemplatePositions(templateName, isReversed);

  const noteCount = basePositions.filter((item) => item.type === "note").length;
  const chosenNotes = getUniqueNotes(articleIndex, noteCount);

  let noteCursor = 0;

  return basePositions.map((pos, index) => {
    let src = "";

    if (pos.type === "note") {
      src = chosenNotes[noteCursor];
      noteCursor += 1;
    } else if (pos.type === "arrow") {
      src = getArrow(articleIndex);
    }

    const sizeMultiplier = getSizeMultiplier(pos, rand);
    const rotationJitter = -14 + rand() * 28;
    const topJitter = -5 + rand() * 10;

    let opacity =
      pos.type === "arrow"
        ? 0.78 + rand() * 0.12
        : 0.42 + rand() * 0.14;

    if (index === 2 && pos.type === "note") {
      opacity *= 0.8;
    }

    return {
      id: `${slug}-doodle-${index}`,
      src,
      type: pos.type,
      top: `${pos.top + topJitter}%`,
      left: `${getSafeLeft(pos.zone, rand)}%`,
      width: `${Math.round(
        pos.baseWidth * sizeMultiplier * GLOBAL_SIZE_BOOST
      )}px`,
      rotation: pos.rotation + rotationJitter,
      opacity,
    };
  });
}

const FictionDoodles = ({ slug, isReversed = false, articleIndex = 0 }) => {
  const doodles = buildDoodles(slug, isReversed, articleIndex);

  return (
    <div className="fiction-doodles" aria-hidden="true">
      {doodles.map((doodle) => (
        <img
          key={doodle.id}
          src={doodle.src}
          alt=""
          className={`fiction-doodle fiction-doodle--${doodle.type}`}
          style={{
            top: doodle.top,
            left: doodle.left,
            width: doodle.width,
            opacity: doodle.opacity,
            transform: `translate(-50%, -50%) rotate(${doodle.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default FictionDoodles;