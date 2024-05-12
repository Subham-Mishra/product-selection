import { useState } from 'react'
import {
  TextButton,
  Heading,
  Badge,
  PrimaryButton,
  SelectionCard,
  SearchInput
} from 'components'
import { SOFTWARE_OPTIONS } from '../../constants'
import toast from 'react-hot-toast'

type SelectedSoftwareType = {
  id: string
  name: string
  icon: string
}

export const ProductSelectionPage = () => {
  const navigateOutOfSetup = () => {
    toast.success('Navigating out of setup')
  }

  const [selectedSoftwares, setSelectedSoftwares] = useState<
    SelectedSoftwareType[]
  >([])

  const handleRemoveSelection = (removeId: string) => {
    setSelectedSoftwares([
      ...selectedSoftwares.filter(
        (thisSoftware) => thisSoftware.id !== removeId
      )
    ])
  }

  return (
    <div className="p-12">
      <div className="flex justify-between">
        <Heading level={2}>axiamatic</Heading>
        <TextButton onClick={navigateOutOfSetup}>Exit Setup</TextButton>
      </div>
      <div className="my-12 grid grid-cols-1 px-2 md:my-36 lg:grid-cols-2 lg:px-24">
        <div className="flex flex-col items-center">
          <div className="grid w-96 grid-cols-1 place-items-center gap-8 sm:grid-cols-2 ">
            <SelectionCard
              selection={selectedSoftwares?.[0] && selectedSoftwares[0]}
              onRemove={handleRemoveSelection}
            />
            <SelectionCard
              selection={selectedSoftwares?.[1] && selectedSoftwares[1]}
              onRemove={handleRemoveSelection}
            />
            <SelectionCard
              selection={selectedSoftwares?.[2] && selectedSoftwares[2]}
              onRemove={handleRemoveSelection}
            />
            <SelectionCard
              selection={selectedSoftwares?.[3] && selectedSoftwares[3]}
              onRemove={handleRemoveSelection}
            />
          </div>
          <div className="mt-8 text-sm text-gray-400">
            {selectedSoftwares.length} product added
          </div>
        </div>
        <div className="mt-16 flex flex-col space-y-8 lg:mt-0">
          <div className="flex flex-col space-y-4">
            <Badge text="1 of 3" />
            <Heading level={3}>Let&apos;s add your internal tools</Heading>
            <p>
              Search to quickly add products your team uses today. You&apos;ll
              be able to add as many as you need later but for now let&apos;s
              add four.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <SearchInput
              options={SOFTWARE_OPTIONS}
              maxSelections={4}
              selectedOptions={selectedSoftwares}
              onChange={setSelectedSoftwares}
              placeholder="Search for any software..."
            />
            <PrimaryButton
              onClick={() => {
                selectedSoftwares.length === 4
                  ? toast.success('Navigating to next step')
                  : toast.error('Please select 4 softwares before proceeding')
              }}
              isDisabled={selectedSoftwares.length < 4}
            >
              Next
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
