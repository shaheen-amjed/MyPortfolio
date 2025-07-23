'use client'

import Header from '@/components/Header'
import About from '@/components/RightSide'
import { useEffect, useState } from 'react'

export default function GitHubLevels() {
  const [activityLevel, setActivityLevel] = useState(0)
  const [contributionLevel, setContributionLevel] = useState(0)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await fetch('https://github-contributions-api.jogruber.de/v4/shaheen-amjed')
        const data = await res.json()

        const totalActivityLevel = data.contributions.reduce(
          (sum: number, item: any) => sum + item.level,
          0
        )

        const totalContributions = data.contributions.reduce(
          (sum: number, item: any) => sum + item.count,
          0
        )

        const calculatedContributionLevel = Math.floor(totalContributions / 10)

        setActivityLevel(totalActivityLevel)
        setContributionLevel(calculatedContributionLevel)
      } catch (err) {
        console.error('Error fetching GitHub data:', err)
      }
    }

    fetchGitHubData()
  }, [])

  return (
    <>
    <Header act={activityLevel}/>   
    <br />
      <About />
    </>
  )
}
