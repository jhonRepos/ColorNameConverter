
/**
 * Main logic for Converting Color name to Hexadecimal
 */
export const getHexFromColorName = (colorName) => {
    const tempDiv = document.createElement("div");
    tempDiv.style.color = colorName;
    document.body.appendChild(tempDiv);

    const computedColor = window.getComputedStyle(tempDiv).color;
    document.body.removeChild(tempDiv);

    const match = computedColor.match(/\d+/g);

    if (computedColor === "rgb(0, 0, 0)" && colorName.toLowerCase() !== 'black') return null;

    const hexCode = `#${parseInt(match[0]).toString(16).padStart(2, "0")}${parseInt(match[1]).toString(16).padStart(2, "0")}${parseInt(match[2]).toString(16).padStart(2, "0")}`;

    return hexCode;
};

/**
 * Handles the color conversion and UI update.
 */
export const handleConvertColor = () => {
    const colorInput = document.getElementById("color-input").value.trim();
    const hexCode = getHexFromColorName(colorInput);
    const hexOutput = document.getElementById("hex-output");
    const colorBox = document.getElementById("color-box");

    if (hexCode) {
        hexOutput.textContent = `${hexCode}`;
        colorBox.style.backgroundColor = hexCode;
    } else {
        hexOutput.textContent = "Invalid color name!";
        colorBox.style.backgroundColor = "transparent";
    }
};

// Attach event listener
document.getElementById("convert-btn").addEventListener("click", handleConvertColor);
