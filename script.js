(function () {
  "use strict";

  const CARD = {
    widthMm: 85,
    heightMm: 55,
    widthPt: 85 * 72 / 25.4,
    heightPt: 55 * 72 / 25.4,
    previewScale: 4,
    exportDpi: 300
  };

  const COLOURS = {
    red: "#CF2031",
    green: "#00FF73",
    blue: "#0092FF"
  };

  const DARK_TEXT = "#231F20";

  const LOGO_PATHS = [
    {
      tx: 20.2501,
      ty: 128.9137,
      d: "M 0 0 C 1.933 0 2.994 0.644 2.994 2.122 C 2.994 3.449 2.008 4.169 -0.19 4.169 L -4.396 4.169 L -4.396 0 Z M -1.364 10.081 C 0.492 10.081 1.516 10.839 1.516 12.165 C 1.516 13.605 0.72 14.325 -1.175 14.325 L -4.396 14.325 L -4.396 10.081 Z M 5.609 7.958 C 8.679 7.238 11.141 4.964 11.141 1.326 C 11.141 -3.335 7.238 -6.102 1.174 -6.102 L -12.544 -6.102 L -12.544 20.426 L 0.909 20.426 C 5.609 20.426 9.664 18.683 9.664 13.453 C 9.664 10.649 7.579 8.792 5.609 8.034 Z"
    },
    {
      tx: 52.6997,
      ty: 136.2657,
      d: "M 0 0 L 0 13.075 L 7.958 13.075 L 7.958 -13.454 L 0.758 -13.454 L -10.308 0.568 L -10.384 0.568 L -10.384 -13.454 L -18.418 -13.454 L -18.418 13.075 L -10.384 13.075 L -0.113 0 Z"
    },
    {
      tx: 64.0893,
      ty: 149.3402,
      d: "M 0 0 L 8.148 0 L 0 -8.114 Z"
    },
    {
      tx: 64.0893,
      ty: 138.1203,
      d: "M 0 0 L 8.148 8.114 L 8.148 -15.308 L 0 -15.308 Z"
    },
    {
      tx: 74.0613,
      ty: 124.9118,
      d: "M 0 0 C 0.078 0.178 0.185 0.333 0.32 0.464 C 0.455 0.595 0.613 0.698 0.793 0.773 C 0.972 0.848 1.163 0.885 1.365 0.885 C 1.567 0.885 1.757 0.848 1.935 0.773 C 2.114 0.698 2.27 0.595 2.404 0.464 C 2.537 0.333 2.644 0.178 2.723 0 C 2.801 -0.178 2.84 -0.371 2.84 -0.578 C 2.84 -0.791 2.801 -0.987 2.723 -1.166 C 2.644 -1.346 2.537 -1.503 2.404 -1.635 C 2.27 -1.767 2.114 -1.87 1.935 -1.944 C 1.757 -2.017 1.567 -2.054 1.365 -2.054 C 1.163 -2.054 0.972 -2.017 0.793 -1.944 C 0.613 -1.87 0.455 -1.767 0.32 -1.635 C 0.185 -1.503 0.078 -1.346 0 -1.166 C -0.079 -0.987 -0.118 -0.791 -0.118 -0.578 C -0.118 -0.371 -0.079 -0.178 0 0 Z M 0.242 -1.08 C 0.303 -1.233 0.389 -1.367 0.497 -1.479 C 0.606 -1.592 0.735 -1.681 0.883 -1.745 C 1.031 -1.809 1.192 -1.841 1.365 -1.841 C 1.535 -1.841 1.694 -1.809 1.841 -1.745 C 1.988 -1.681 2.116 -1.592 2.224 -1.479 C 2.333 -1.367 2.419 -1.233 2.48 -1.08 C 2.542 -0.927 2.573 -0.76 2.573 -0.578 C 2.573 -0.403 2.542 -0.239 2.48 -0.086 C 2.419 0.066 2.333 0.198 2.224 0.309 C 2.116 0.42 1.988 0.508 1.841 0.573 C 1.694 0.637 1.535 0.669 1.365 0.669 C 1.192 0.669 1.031 0.637 0.883 0.573 C 0.735 0.508 0.606 0.42 0.497 0.309 C 0.389 0.198 0.303 0.066 0.242 -0.086 C 0.18 -0.239 0.149 -0.403 0.149 -0.578 C 0.149 -0.76 0.18 -0.927 0.242 -1.08 Z"
    },
    {
      tx: 75.635,
      ty: 124.2303,
      d: "M 0 0 C 0.124 0.013 0.229 0.054 0.312 0.124 C 0.396 0.194 0.438 0.304 0.438 0.454 C 0.438 0.614 0.391 0.733 0.295 0.812 C 0.2 0.891 0.053 0.93 -0.145 0.93 L -0.789 0.93 L -0.789 -0.736 L -0.53 -0.736 L -0.53 -0.019 L -0.255 -0.019 L 0.198 -0.736 L 0.476 -0.736 Z M -0.242 0.167 L -0.521 0.167 L -0.521 0.714 L -0.167 0.714 C -0.123 0.714 -0.078 0.71 -0.031 0.704 C 0.014 0.697 0.055 0.685 0.09 0.666 C 0.126 0.648 0.154 0.622 0.177 0.588 C 0.199 0.554 0.211 0.508 0.211 0.45 C 0.211 0.382 0.198 0.329 0.173 0.291 C 0.148 0.252 0.114 0.224 0.073 0.206 C 0.03 0.188 -0.017 0.176 -0.071 0.172 C -0.125 0.169 -0.182 0.167 -0.242 0.167 Z"
    }
  ];

  const state = {
    colour: "red",
    name: "First Last Name",
    role: "Job Title",
    third: "Third Text Line"
  };

  const canvas = document.getElementById("cardCanvas");
  const nameInput = document.getElementById("nameInput");
  const roleInput = document.getElementById("roleInput");
  const thirdInput = document.getElementById("thirdInput");
  const swatchButtons = Array.from(document.querySelectorAll(".swatch-button"));
  const downloadButton = document.getElementById("downloadButton");

  function initialise() {
    sizePreviewCanvas();
    renderPreview();

    nameInput.addEventListener("input", function () {
      state.name = nameInput.value;
      renderPreview();
    });

    roleInput.addEventListener("input", function () {
      state.role = roleInput.value;
      renderPreview();
    });

    thirdInput.addEventListener("input", function () {
      state.third = thirdInput.value;
      renderPreview();
    });

    swatchButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const colour = button.dataset.colour;
        if (!COLOURS[colour]) {
          return;
        }

        state.colour = colour;
        updateSwatches();
        renderPreview();
      });
    });

    downloadButton.addEventListener("click", downloadPdf);
  }

  function sizePreviewCanvas() {
    canvas.width = Math.round(CARD.widthPt * CARD.previewScale);
    canvas.height = Math.round(CARD.heightPt * CARD.previewScale);
  }

  function renderPreview() {
    renderCard(canvas);
  }

  function renderCard(targetCanvas) {
    const ctx = targetCanvas.getContext("2d");
    const scaleX = targetCanvas.width / CARD.widthPt;
    const scaleY = targetCanvas.height / CARD.heightPt;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, targetCanvas.width, targetCanvas.height);
    ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, CARD.widthPt, CARD.heightPt);

    drawLogo(ctx, COLOURS[state.colour]);
    drawCardText(ctx);
  }

  function drawLogo(ctx, colour) {
    if (typeof Path2D === "undefined") {
      drawLogoFallback(ctx, colour);
      return;
    }

    ctx.save();
    ctx.fillStyle = colour;
    ctx.translate(0, CARD.heightPt);
    ctx.scale(1, -1);

    LOGO_PATHS.forEach(function (definition) {
      if (!definition.path) {
        definition.path = new Path2D(definition.d);
      }

      ctx.save();
      ctx.translate(definition.tx, definition.ty);
      ctx.fill(definition.path);
      ctx.restore();
    });

    ctx.restore();
  }

  function drawLogoFallback(ctx, colour) {
    ctx.save();
    ctx.fillStyle = colour;
    ctx.font = "900 38px Arial, Helvetica, sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("BNI", 6, 4);
    ctx.restore();
  }

  function drawCardText(ctx) {
    drawFittedText(ctx, state.name, {
      x: CARD.widthPt / 2,
      y: CARD.heightPt - 72.5776,
      maxWidth: 160,
      size: 16.65,
      minSize: 8,
      weight: 900,
      family: '"Arial Black", Arial, Helvetica, sans-serif',
      colour: COLOURS[state.colour]
    });

    drawFittedText(ctx, state.role, {
      x: CARD.widthPt / 2,
      y: CARD.heightPt - 55.7534,
      maxWidth: 140,
      size: 14.1732,
      minSize: 7,
      weight: 700,
      family: "Arial, Helvetica, sans-serif",
      colour: DARK_TEXT
    });

    drawFittedText(ctx, state.third, {
      x: CARD.widthPt / 2,
      y: CARD.heightPt - 19.3804,
      maxWidth: 145,
      size: 11.9199,
      minSize: 6,
      weight: 400,
      family: "Arial, Helvetica, sans-serif",
      colour: DARK_TEXT
    });
  }

  function drawFittedText(ctx, rawText, options) {
    const text = singleLine(rawText);
    if (!text) {
      return;
    }

    let fontSize = options.size;
    ctx.save();
    ctx.fillStyle = options.colour;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";

    setCanvasFont(ctx, options, fontSize);
    while (fontSize > options.minSize && ctx.measureText(text).width > options.maxWidth) {
      fontSize -= 0.25;
      setCanvasFont(ctx, options, fontSize);
    }

    const output = ctx.measureText(text).width > options.maxWidth
      ? truncateText(ctx, text, options.maxWidth)
      : text;

    ctx.fillText(output, options.x, options.y);
    ctx.restore();
  }

  function setCanvasFont(ctx, options, size) {
    ctx.font = options.weight + " " + size.toFixed(2) + "px " + options.family;
  }

  function truncateText(ctx, text, maxWidth) {
    const marker = "...";
    let output = text;

    while (output.length > 0 && ctx.measureText(output + marker).width > maxWidth) {
      output = output.slice(0, -1);
    }

    return output ? output + marker : marker;
  }

  function singleLine(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function updateSwatches() {
    swatchButtons.forEach(function (button) {
      const isActive = button.dataset.colour === state.colour;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function downloadPdf() {
    const originalText = downloadButton.textContent;

    try {
      downloadButton.disabled = true;
      downloadButton.textContent = "Preparing...";

      const exportCanvas = createExportCanvas();
      const imageBytes = canvasToRgbBytes(exportCanvas);
      const pdf = createPdf(imageBytes, exportCanvas.width, exportCanvas.height);

      saveBlob(pdf, "bni-card.pdf");
    } finally {
      downloadButton.disabled = false;
      downloadButton.textContent = originalText;
    }
  }

  function createExportCanvas() {
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = Math.round(CARD.widthMm / 25.4 * CARD.exportDpi);
    exportCanvas.height = Math.round(CARD.heightMm / 25.4 * CARD.exportDpi);
    renderCard(exportCanvas);
    return exportCanvas;
  }

  function canvasToRgbBytes(sourceCanvas) {
    const ctx = sourceCanvas.getContext("2d");
    const pixels = ctx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height).data;
    const bytes = new Uint8Array(sourceCanvas.width * sourceCanvas.height * 3);

    for (let source = 0, target = 0; source < pixels.length; source += 4, target += 3) {
      bytes[target] = pixels[source];
      bytes[target + 1] = pixels[source + 1];
      bytes[target + 2] = pixels[source + 2];
    }

    return bytes;
  }

  function createPdf(imageBytes, imageWidth, imageHeight) {
    const encoder = new TextEncoder();
    const chunks = [];
    const offsets = [0];
    let position = 0;

    function push(part) {
      const bytes = typeof part === "string" ? encoder.encode(part) : part;
      chunks.push(bytes);
      position += bytes.length;
    }

    function addObject(id, parts) {
      offsets[id] = position;
      push(id + " 0 obj\n");
      parts.forEach(push);
      push("\nendobj\n");
    }

    const pageWidth = formatPdfNumber(CARD.widthPt);
    const pageHeight = formatPdfNumber(CARD.heightPt);
    const content = "q\n" + pageWidth + " 0 0 " + pageHeight + " 0 0 cm\n/Im0 Do\nQ\n";

    push("%PDF-1.4\n%BNI\n");
    addObject(1, ["<< /Type /Catalog /Pages 2 0 R >>"]);
    addObject(2, ["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]);
    addObject(3, [
      "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + pageWidth + " " + pageHeight + "] ",
      "/Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>"
    ]);
    addObject(4, [
      "<< /Type /XObject /Subtype /Image /Width " + imageWidth + " /Height " + imageHeight + " ",
      "/ColorSpace /DeviceRGB /BitsPerComponent 8 /Length " + imageBytes.length + " >>\nstream\n",
      imageBytes,
      "\nendstream"
    ]);
    addObject(5, [
      "<< /Length " + encoder.encode(content).length + " >>\nstream\n",
      content,
      "endstream"
    ]);

    const xrefPosition = position;
    push("xref\n0 6\n");
    push("0000000000 65535 f \n");

    for (let id = 1; id <= 5; id += 1) {
      push(String(offsets[id]).padStart(10, "0") + " 00000 n \n");
    }

    push("trailer\n<< /Size 6 /Root 1 0 R >>\n");
    push("startxref\n" + xrefPosition + "\n%%EOF\n");

    return new Blob(chunks, { type: "application/pdf" });
  }

  function formatPdfNumber(value) {
    return value.toFixed(3).replace(/\.?0+$/, "");
  }

  function saveBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  initialise();
}());
