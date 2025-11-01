# 3D Car Models

Place your 3D car model files in this directory to use them in the application.

## How to Add a Car Model

1. **Prepare your model**: 
   - Save your 3D car model in GLB format
   - Name it `car.glb`
   - Place it in this directory: `public/models/car.glb`

2. **Enable the model**:
   - Open `src/components/Car3DCanvas.tsx`
   - Find the line: `const modelPath = undefined;`
   - Change it to: `const modelPath = '/models/car.glb';`

3. **Save and the app will automatically reload**

## Model Requirements

- **Format**: GLB (GLTF Binary)
- **Polygon count**: Under 100k triangles recommended for performance
- **Size**: Keep file size reasonable (< 10MB recommended)
- **Orientation**: Model should face forward (adjust rotation in code if needed)

## Customization

The model will automatically:
- Take on your site's theme color
- Have a metallic, glossy finish (90% metalness, 10% roughness)
- Be positioned and scaled in the scene
- Auto-rotate slowly
- Support drag-to-rotate and zoom interactions

### Adjusting Position/Scale/Rotation

If your model appears too large, small, or incorrectly oriented, edit the `primitive` component in `Car3DCanvas.tsx`:

```typescript
<primitive 
  object={clonedScene} 
  scale={[1, 1, 1]}      // Adjust to make larger/smaller
  position={[0, -1, 0]}  // Adjust Y value to move up/down
  rotation={[0, 0, 0]}   // Adjust to rotate the model
/>
```

## Fallback Behavior

If no model is provided or if loading fails:
- A placeholder box will display instead
- The box uses your theme color with the same material properties
- All interactions (rotation, zoom) still work

## Current Status

Currently showing: **Placeholder Box** (no car.glb file detected)

To display a 3D car model, follow the steps above!
