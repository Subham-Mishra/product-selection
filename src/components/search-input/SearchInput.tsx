import React, { useEffect, useRef, useState } from 'react'
import chevronDown from 'assets/chevron-down.svg'
import search from 'assets/search.svg'
import check from 'assets/check.svg'
import toast from 'react-hot-toast'

interface OptionType {
  id: string
  name: string
  icon: string
}

interface MultiSelectProps {
  options: OptionType[]
  selectedOptions: OptionType[]
  placeholder: string
  maxSelections?: number
  onChange: (selectedOptions: OptionType[]) => void
}

const SearchInput: React.FC<MultiSelectProps> = ({
  options,
  selectedOptions,
  placeholder,
  maxSelections,
  onChange
}) => {
  const [searchText, setSearchText] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: OptionType) => {
    if (
      maxSelections &&
      selectedOptions.length >= maxSelections &&
      !selectedOptions.includes(option)
    ) {
      toast.error('Maximum selections reached!')
      return
    }
    if (
      selectedOptions.some((selectedOption) => selectedOption.id === option.id)
    ) {
      onChange(
        selectedOptions.filter(
          (selectedOption) => selectedOption.id !== option.id
        )
      )
    } else onChange([...selectedOptions, option])
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center rounded-md border border-gray-300 px-3 py-2"
        onClick={toggleDropdown}
      >
        <img src={search} alt="search" className="mr-2 size-4" />
        <input
          type="text"
          className="flex-1 focus:outline-none"
          placeholder={placeholder}
          value={searchText}
          onChange={handleInputChange}
        />
        <img src={chevronDown} className="size-5" />
      </div>
      {(isOpen || searchText) && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-300 bg-white py-2 shadow-lg">
          {filteredOptions.map((option) => (
            <div
              key={option.id}
              className="duration group mx-2 flex cursor-pointer items-center gap-2 rounded-md px-4 py-2 transition-colors hover:bg-blue-700 hover:text-white"
              onClick={() => handleOptionClick(option)}
            >
              <img src={option.icon} alt={option.name} className="size-5" />
              <span className="flex-1">{option.name}</span>
              {selectedOptions.some(
                (selectedOption) => selectedOption.id === option.id
              ) && (
                <img
                  src={check}
                  alt="check"
                  className="size-4 group-hover:text-white"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export { SearchInput }
