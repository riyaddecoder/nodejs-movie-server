import os from 'os'

export const getIpAddress = () => {
  // Get network interfaces
  const networkInterfaces = os.networkInterfaces()

  // Extract IPv4 addresses
  const wifiInterface = Object.keys(networkInterfaces)
    .map(interfaceName => networkInterfaces[interfaceName])
    .flat()
    .find(info => info.family === 'IPv4' && info.internal === false)

  const wifiIpAddress = wifiInterface ? wifiInterface.address : ''

  return wifiIpAddress
}
