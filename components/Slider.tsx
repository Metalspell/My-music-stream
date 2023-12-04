'use client'
import * as RadixSlider from '@radix-ui/react-slider';
import { SliderProps } from '@/interfaces'

const Slider = ({ value = 1, onChange }: SliderProps) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0])
  }
  return (
    <RadixSlider.Root
      className="relative flex items-center w-full h-10 select-none touch-none"
      max={1}
      step={0.1}
      aria-label="Volume"
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
    >
      <RadixSlider.Track
        className="
          bg-neutral-600 
          relative 
          grow 
          rounded-full 
          h-[3px]
        "
      >
        <RadixSlider.Range
          className="absolute h-full bg-white rounded-full "
        />
      </RadixSlider.Track>
    </RadixSlider.Root>
  )
}

export default Slider