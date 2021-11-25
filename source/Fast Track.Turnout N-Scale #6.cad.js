/*
L17 __                                                                                                                                 __
L15 __                                                                                                                     __ __ ++ ++ ||  ++ L16
L13 __                                                                                                            __ __ ++ E3 || || || ||  ++ L14
L11 __                    #                                                                              __ __ ++ || || E3 E3 || || || ||  ++ L12
L9  __                    #                                                                  __ __ ++ ++ || || E3 || || E3 E3 || || || ||  ++ L10
L7  __                    #                                                      __ __ ++ ++ || E3 E3 || || || E3 || || E3 E3 || || || ||  ++ L8
L5  __                    #                                          __ __ ++ ++ || || || || || E3 E3 || || || E3 || || E3 E3 || || || ||  ++ L6
L3  __                    #                     __ __ __ __ ++ ++ ++ || || E3 || || || || || || E3 E3 || || || E3 || || E3 E3 || || || ||  ++ L4
L1  __      __ __ __ __ __#++ ++ ++ ++ ++ ++ ++ || || || E3 || || || || || E3 || || || || || || E3 E3 || || || E3 || || E3 E3 || || || ||  ++ L2
            || || || E3 ||#|| || || || || E3 || || || || E3 || || || || || E3 || || || || || || E3 E3 || || || E3 || || E3 E3 || || || ||
            || || || E3 ||#|| || || || || E3 || || || || E3 || || || || || E3 || || || || || || E3 E3 || || || E3 || || E3 E3 || || || ||
            || || || E3 ||#|| || || || || E3 || || || || E3 || || || || || E3 || || || || || || E3 E3 || || || E3 || || E3 E3 || || || ||
            || || || E3 ||#|| || || || || E3 || || || || E3 || || || || || E3 || || || || || || E3 E3 || || || E3 || || E3 E3 || || || ||
            || || || E3 ||#|| || || || || E3 || || || || E3 || || || || || E3 || || || || || || E3 E3 || || || E3 || || E3 E3 || || || ||
            ++ ++ ++ ++ ++#++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++ ++  ++ L0
                          #
            -5 -4 -3 -2 -1 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37
                          0

                                                                                              +----------------------------------------+
                                                                                              |                   R4                   |
                                                     +----------------------------------------+----------------------------------------+
                                                     |                   R4                   |
            +----------------------------------------+----------------------------------------+
            |                   R4                   |                                                               +-----------------+
            +----------------------------------------+                                             +-----------------+       R3        |
                        +--------------------------------------------------------------------------+       R3        +-----------------+
                        |                                    R3                                    +-----------------+
                        +---------------------------------------------------------------------+----+-----------------------------------+
                                                                                              |                   R2                   |
                                                     +----------------------------------------+----------------------------------------+
                                                     |                   R2                   |
                        +----------------------------+----------------------------------------+
                        |             R2             |
                        +----------------------------+
            +--------------------------------------------------------------------------------------------------------------------------+
            |                                                            R1                                                            |
            +--------------------------------------------------------------------------------------------------------------------------+

            +--------+
            |        |
            |      --+ L#_R4_D
            |   --/  |
    L#_R4_C +--/     |
            |   R4   |
            |      --+ L#_R4_B
            |   --/  |
    L#_R4_A +--/     |
            |        |
            |        |
            |        |
            |        |
    L#_R3_C +--------+ L#_R3_D
            |        |
            |   R3   |
            |        |
    L#_R3_A +--------+ L#_R3_B
            |        |
            |   L#   |
            |        |
            |        |
            |      --+ L#_R2_D
            |   --/  |
    L#_R2_C +--/     |
            |   R2   |
            |      --+ L#_R2_B
            |   --/  |
    L#_R2_A +--/     |
            |        |
            |        |
            |        |
            |        |
    L#_R1_C +--------+ L#_R1_D
            |        |
            |   R1   |
            |        |
    L#_R1_A +--------+ L#_R1_B
            |        |
            |        |
            +--------+





300 px => 1"
1 px =>   0.08466666667mm
~ 1 px => 0.08477842003mm

mm = ROUND((1944−px)×0.08466666667, 2)

L0  y = 1944 px = 0.00 mm
L1  y = 1752 px = 16.26 mm
L2  y = 1741 px = 17.19 mm
L3  y = 1730 px = 18.12 mm
L4  y = 1719 px = 19.05 mm
L5  y = 1707 px = 20.07 mm
L6  y = 1696 px = 21.00 mm
L7  y = 1685 px = 21.93 mm
L8  y = 1674 px = 22.86 mm
L9  y = 1662 px = 23.88 mm
L10 y = 1651 px = 24.81 mm
L11 y = 1640 px = 25.74 mm
L12 y = 1629 px = 26.67 mm
L13 y = 1617 px = 27.69 mm
L14 y = 1607 px = 28.53 mm
L15 y = 1595 px = 29.55 mm
L16 y = 1584 px = 30.48 mm
L17 y = 1573 px = 31.41 mm

mm = ROUND((px-807)×0.08466666667, 2)

S_0_x[center] = 807 px = 0.00mm, x[right] = 815 px => width = 17 px => 1.44mm ~ 1.44mm

S-5_x[left] =  629 px = -15.07 mm
S-4_x[left] =  667 px = -11.85 mm
S-3_x[left] =  704 px =  -8.72 mm
S-2_x[left] =  742 px =  -5.50 mm
S-1_x[left] =  777 px =  -2.54 mm
S_0_x[left] =  798 px =  -0.76 mm
S01_x[left] =  819 px =   1.02 mm
S02_x[left] =  854 px =   3.98 mm
S03_x[left] =  892 px =   7.20 mm
S04_x[left] =  930 px =  10.41 mm
S05_x[left] =  967 px =  13.55 mm
S06_x[left] = 1005 px =  16.76 mm
S07_x[left] = 1042 px =  19.90 mm
S08_x[left] = 1080 px =  23.11 mm
S09_x[left] = 1117 px =  26.25 mm
S10_x[left] = 1155 px =  29.46 mm
S11_x[left] = 1193 px =  32.68 mm
S12_x[left] = 1230 px =  35.81 mm
S13_x[left] = 1267 px =  38.95 mm
S14_x[left] = 1305 px =  42.16 mm
S15_x[left] = 1343 px =  45.38 mm
S16_x[left] = 1380 px =  48.51 mm
S17_x[left] = 1418 px =  51.73 mm
S18_x[left] = 1455 px =  54.86 mm
S19_x[left] = 1493 px =  58.08 mm
S20_x[left] = 1531 px =  61.30 mm
S21_x[left] = 1568 px =  64.43 mm
S22_x[left] = 1606 px =  67.65 mm
S23_x[left] = 1643 px =  70.78 mm
S24_x[left] = 1681 px =  74.00 mm
S25_x[left] = 1719 px =  77.22 mm
S26_x[left] = 1756 px =  80.35 mm
S27_x[left] = 1793 px =  83.48 mm
S28_x[left] = 1831 px =  86.70 mm
S29_x[left] = 1869 px =  89.92 mm
S30_x[left] = 1906 px =  93.05 mm
S31_x[left] = 1944 px =  96.27 mm
S32_x[left] = 1981 px =  99.40 mm
S33_x[left] = 2020 px = 102.70 mm
S34_x[left] = 2056 px = 105.75 mm
S35_x[left] = 2094 px = 108.97 mm
S36_x[left] = 2131 px = 112.10 mm
S37_x[left] = 2169 px = 115.32 mm

mm = ROUND((1944−px)×0.08466666667, 2)

L-#_R4_C = L-#_R4_D = L0-25_R3_C = L0-24_R3_D = L27-37_R2_C = L27-37_R2_D = 1786 px = 13.38mm
L-#_R4_A = L-#_R4_B = L0-25_R3_A = L0-24_R3_B = L27-37_R2_A = L27-37_R2_B = 1798 px = 12.36mm

L#_R1_C = L#_R1_D = 1898 px =  3.89mm
L#_R1_A = L#_R1_B = 1910 px =  2.88mm

L1_R4_D =  1784 px = 13.55 mm
L1_R4_C =  1785 px = 13.46 mm
L1_R2_D =  1883 px =  5.16 mm
L1_R2_C =  1883 px =  5.16 mm
      
L2_R4_D =  1782 px = 13.72 mm
L2_R4_C =  1783 px = 13.63 mm
L2_R2_D =  1883 px =  5.16 mm
L2_R2_C =  1883 px =  5.16 mm
      
L3_R4_D =  1781 px = 13.80 mm
L3_R4_C =  1782 px = 13.72 mm
L3_R2_D =  1883 px =  5.16 mm
L3_R2_C =  1883 px =  5.16 mm
      
L4_R4_D =  1779 px = 13.97 mm
L4_R4_C =  1780 px = 13.89 mm
L4_R2_D =  1883 px =  5.16 mm
L4_R2_C =  1883 px =  5.16 mm
      
L5_R4_D =  1777 px = 14.14 mm
L5_R4_C =  1778 px = 14.05 mm
L5_R2_D =  1883 px =  5.16 mm
L5_R2_C =  1883 px =  5.16 mm
      
L7_R4_D =  1773 px = 14.48 mm
L7_R4_C =  1774 px = 14.39 mm
L7_R2_D =  1881 px =  5.33 mm
L7_R2_C =  1882 px =  5.25 mm
L7_R2_B =  1893 px =  4.32 mm
L7_R2_A =  1894 px =  4.23 mm
      
L8_R4_D =  1771 px = 14.65 mm
L8_R4_C =  1772 px = 14.56 mm
L8_R4_B =  1783 px = 13.63 mm
L8_R4_A =  1784 px = 13.55 mm
L8_R2_D =  1879 px =  5.50 mm
L8_R2_C =  1880 px =  5.42 mm
L8_R2_B =  1891 px =  4.49 mm
L8_R2_A =  1892 px =  4.40 mm
      
L9_R4_D =  1768 px = 14.90 mm
L9_R4_C =  1769 px = 14.82 mm
L9_R4_B =  1780 px = 13.89 mm
L9_R4_A =  1781 px = 13.80 mm
L9_R2_D =  1877 px =  5.67 mm
L9_R2_C =  1878 px =  5.59 mm
L9_R2_B =  1889 px =  4.66 mm
L9_R2_A =  1890 px =  4.57 mm
      
L10_R4_D = 1765 px = 15.16 mm
L10_R4_C = 1766 px = 15.07 mm
L10_R4_B = 1777 px = 14.14 mm
L10_R4_A = 1778 px = 14.05 mm
L10_R2_D = 1875 px =  5.84 mm
L10_R2_C = 1876 px =  5.76 mm
L10_R2_B = 1888 px =  4.74 mm
L10_R2_A = 1889 px =  4.66 mm
      
L12_R4_D = 1758 px = 15.75 mm
L12_R4_C = 1759 px = 15.66 mm
L12_R4_B = 1769 px = 14.82 mm
L12_R4_A = 1771 px = 14.65 mm
L12_R2_D = 1870 px =  6.27 mm
L12_R2_C = 1871 px =  6.18 mm
L12_R2_B = 1882 px =  5.25 mm
L12_R2_A = 1883 px =  5.16 mm
      
L13_R4_D = 1753 px = 16.17 mm
L13_R4_C = 1755 px = 16.00 mm
L13_R4_B = 1766 px = 15.07 mm
L13_R4_A = 1767 px = 14.99 mm
L13_R2_D = 1866 px =  6.60 mm
L13_R2_C = 1868 px =  6.43 mm
L13_R2_B = 1878 px =  5.59 mm
L13_R2_A = 1880 px =  5.42 mm

L14_R4_D = 1749 px = 16.51 mm
L14_R4_C = 1751 px = 16.34 mm
L14_R4_B = 1762 px = 15.41 mm
L14_R4_A = 1764 px = 15.24 mm
L14_R2_D = 1863 px =  6.86 mm
L14_R2_C = 1864 px =  6.77 mm
L14_R2_B = 1875 px =  5.84 mm
L14_R2_A = 1877 px =  5.67 mm
      
L15_R4_D = 1745 px = 16.85 mm
L15_R4_C = 1747 px = 16.68 mm
L15_R4_B = 1757 px = 15.83 mm
L15_R4_A = 1759 px = 15.66 mm
L15_R2_D = 1858 px =  7.28 mm
L15_R2_C = 1860 px =  7.11 mm
L15_R2_B = 1871 px =  6.18 mm
L15_R2_A = 1873 px =  6.01 mm
      
L16_R4_D = 1741 px = 17.19 mm
L16_R4_C = 1743 px = 17.02 mm
L16_R4_B = 1753 px = 16.17 mm
L16_R4_A = 1755 px = 16.00 mm
L16_R2_D = 1853 px =  7.70 mm
L16_R2_C = 1855 px =  7.54 mm
L16_R2_B = 1865 px =  6.69 mm
L16_R2_A = 1868 px =  6.43 mm
      
L18_R4_D = 1731 px = 18.03 mm
L18_R4_C = 1733 px = 17.86 mm
L18_R4_B = 1743 px = 17.02 mm
L18_R4_A = 1745 px = 16.85 mm
L18_R2_D = 1845 px =  8.38 mm
L18_R2_C = 1847 px =  8.21 mm
L18_R2_B = 1857 px =  7.37 mm
L18_R2_A = 1859 px =  7.20 mm
      
L19_R4_D = 1726 px = 18.46 mm
L19_R4_C = 1728 px = 18.29 mm
L19_R4_B = 1738 px = 17.44 mm
L19_R4_A = 1740 px = 17.27 mm
L19_R2_D = 1840 px =  8.81 mm
L19_R2_C = 1842 px =  8.64 mm
L19_R2_B = 1852 px =  7.79 mm
L19_R2_A = 1854 px =  7.62 mm
      
L20_R4_D = 1720 px = 18.97 mm
L20_R4_C = 1723 px = 18.71 mm
L20_R4_B = 1732 px = 17.95 mm
L20_R4_A = 1735 px = 17.70 mm
L20_R2_D = 1834 px =  9.31 mm
L20_R2_C = 1836 px =  9.14 mm
L20_R2_B = 1846 px =  8.30 mm
L20_R2_A = 1848 px =  8.13 mm
      
L21_R4_D = 1715 px = 19.39 mm
L21_R4_C = 1717 px = 19.22 mm
L21_R4_B = 1727 px = 18.37 mm
L21_R4_A = 1729 px = 18.20 mm
L21_R2_D = 1829 px =  9.74 mm
L21_R2_C = 1831 px =  9.57 mm
L21_R2_B = 1841 px =  8.72 mm
L21_R2_A = 1843 px =  8.55 mm
      
L22_R4_D = 1709 px = 19.90 mm
L22_R4_C = 1711 px = 19.73 mm
L22_R4_B = 1721 px = 18.88 mm
L22_R4_A = 1723 px = 18.71 mm
L22_R2_D = 1823 px = 10.24 mm
L22_R2_C = 1825 px = 10.08 mm
L22_R2_B = 1835 px =  9.23 mm
L22_R2_A = 1837 px =  9.06 mm
      
L23_R4_D = 1703 px = 20.40 mm
L23_R4_C = 1705 px = 20.24 mm
L23_R4_B = 1715 px = 19.39 mm
L23_R4_A = 1717 px = 19.22 mm
L23_R2_D = 1817 px = 10.75 mm
L23_R2_C = 1819 px = 10.58 mm
L23_R2_B = 1829 px =  9.74 mm
L23_R2_A = 1832 px =  9.48 mm
      
L26_R4_D = 1684 px = 22.01 mm
L26_R4_C = 1687 px = 21.76 mm
L26_R4_B = 1709 px = 19.90 mm
L26_R4_A = 1712 px = 19.64 mm
L26_R3_D = 1785 px = 13.46 mm
L26_R3_C = 1786 px = 13.38 mm
L26_R2_B = 1811 px = 11.26 mm
L26_R2_A = 1813 px = 11.09 mm
L26_R1_D = 1886 px =  4.91 mm
L26_R1_C = 1885 px =  5.00 mm
      
L27_R4_D = 1677 px = 22.61 mm
L27_R4_C = 1680 px = 22.35 mm
L27_R4_B = 1703 px = 20.40 mm
L27_R4_A = 1706 px = 20.15 mm
L27_R3_D = 1779 px = 13.97 mm
L27_R3_C = 1782 px = 13.72 mm
L27_R2_B = 1811 px = 11.26 mm
L27_R2_A = 1811 px = 11.26 mm
L27_R1_D = 1886 px =  4.91 mm
L27_R1_C = 1886 px =  4.91 mm
      
L28_R4_D = 1671 px = 23.11 mm
L28_R4_C = 1674 px = 22.86 mm
L28_R4_B = 1698 px = 20.83 mm
L28_R4_A = 1700 px = 20.66 mm
L28_R3_D = 1772 px = 14.56 mm
L28_R3_C = 1775 px = 14.31 mm
L28_R2_B = 1811 px = 11.26 mm
L28_R2_A = 1811 px = 11.26 mm
L28_R1_D = 1886 px =  4.91 mm
L28_R1_C = 1886 px =  4.91 mm
      
L30_R4_D = 1659 px = 24.13 mm
L30_R4_C = 1662 px = 23.88 mm
L30_R4_B = 1671 px = 23.11 mm
L30_R4_A = 1674 px = 22.86 mm
L30_R3_D = 1773 px = 14.48 mm
L30_R3_C = 1776 px = 14.22 mm
      
L31_R4_D = 1652 px = 24.72 mm
L31_R4_C = 1655 px = 24.47 mm
L31_R4_B = 1665 px = 23.62 mm
L31_R4_A = 1668 px = 23.37 mm
L31_R3_D = 1767 px = 14.99 mm
L31_R3_C = 1770 px = 14.73 mm
L31_R3_B = 1779 px = 13.97 mm
L31_R3_A = 1782 px = 13.72 mm
      
L34_R4_D = 1631 px = 26.50 mm
L34_R4_C = 1636 px = 26.08 mm
L34_R4_B = 1645 px = 25.32 mm
L34_R4_A = 1648 px = 25.06 mm
L34_R3_D = 1747 px = 16.68 mm
L34_R3_C = 1750 px = 16.43 mm
L34_R3_B = 1760 px = 15.58 mm
L34_R3_A = 1763 px = 15.32 mm
      
L35_R4_D = 1626 px = 26.92 mm
L35_R4_C = 1629 px = 26.67 mm
L35_R4_B = 1639 px = 25.82 mm
L35_R4_A = 1642 px = 25.57 mm
L35_R3_D = 1741 px = 17.19 mm
L35_R3_C = 1744 px = 16.93 mm
L35_R3_B = 1754 px = 16.09 mm
L35_R3_A = 1757 px = 15.83 mm
      
L36_R4_D = 1620 px = 27.43 mm
L36_R4_C = 1623 px = 27.18 mm
L36_R4_B = 1633 px = 26.33 mm
L36_R4_A = 1636 px = 26.08 mm
L36_R3_D = 1734 px = 17.78 mm
L36_R3_C = 1737 px = 17.53 mm
L36_R3_B = 1747 px = 16.68 mm
L36_R3_A = 1750 px = 16.43 mm
      
L37_R4_D = 1614 px = 27.94 mm
L37_R4_C = 1617 px = 27.69 mm
L37_R4_B = 1627 px = 26.84 mm
L37_R4_A = 1630 px = 26.59 mm
L37_R3_D = 1728 px = 18.29 mm
L37_R3_C = 1731 px = 18.03 mm
L37_R3_B = 1741 px = 17.19 mm
L37_R3_A = 1744 px = 16.93 mm
*/

/**
                           I     H                                           E     D
▷ Y3                   ┌───○─────○───┐                                   ┌───○─────○───┐                          ┌───○─────○───┐
│               ┌──────┘             └──────┐                     ┌──────┘             └──────┐            ┌──────┘             └──────┐
▷ Y2      J ○───┘                           └───○─────────────○───┘                           └───○────○───┘                           └───○ C
│           │                                   G             F                                                                            │
│           │                                                                                                                              │
│           │                                                                                                                              │
▷ Y0      A ○──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────○ B

            △──────────────△─────△──────────────△─────────────△──────────────△─────△──────────────△────△──────────────△─────△──────────────△
           X0A            X0B   X0C           X0D           X1A            X1B   X1C            X1D  X2A            X2B   X2C            X2D

▷ Y3        E ○─────○ D
|            /       \
|           /         \
▷ Y1     F ○           ○ C
│          │           │
│          │           │
│          │           │
▷ Y0     A ○───────────○ B

           △──△─────△──△
           X1 X2    X3 X4

Rail foot height: 0.40m
Rail support height: 0.40m
Slepper height under rail: 2.75mm 

Y0 = 0.00mm
Y1 = 2.75mm - (193/185 = 1.04)mm = 1.71mm
Y2 = 2.75mm - (50/185 = 0.27)mm = 2.48mm
Y3 = 2.75mm + 0.40mm = 3.15mm

Russian Sleeper prototype:
Rail Center to slide: 240mm
Slide width: 240mm
Slide to Sleeper Center: 300mm
Rail Distance: 1760mm

Scale rail distance: 12.87mm - 3.38mm = 9.49mm
Scale: 9.49/1760 = 1/185

N-Scale:
Rail Center to slide: 240/185 = 1.30
Middle Slide width: 1.30mm
Side Slide width: 1.62mm
Sleeper width top: 170mm/185 = 0.92mm
Sleeper width bottom: 300mm/185 = 1.62mm

Rail width on drawing: 1.01mm
Rail width width actual: 1.33mm
Rail side slack: 0.13mm
Rail width with slack: 1.60mm
Rail top side support: 40mm/160 = 0.25mm
Rail top side support (): 40mm/160 = 1.25mm

Drawing Left Bound: X#L
Drawing Right Bound: X#R

X#A = X#B - 1.30mm = X#L - 2.10mm
X#B = X#L + 1.01mm/2 - 1.30mm = X#L - 0.80mm 
X#C = X#R + (1.33mm-1.01mm)/2 + 0.13mm + 0.25mm = X#R + 0.54mm
X#D = X#B + 2.34mm = X#R + 2.88mm

**/
const SWID = 1.62;
const S_5X = -15.07;
const S_4X = -11.85;
const S_3X = -8.72;
const S_1X = -2.54;
const S00X = 0;
const S01X = 1.02;
const S02X = 3.98;
const S03X = 7.2;
const S04X = 10.41;
const S05X = 13.55;
const S07X = 19.9;
const S08X = 23.11;
const S09X = 26.25;
const S10X = 29.46;
const S12X = 35.81;
const S13X = 38.95;
const S14X = 42.16;
const S15X = 45.38;
const S16X = 48.51;
const S18X = 54.86;
const S19X = 58.08;
const S20X = 61.3;
const S21X = 64.43;
const S22X = 67.65;
const S23X = 70.78;
const S26X = 80.35;
const S27X = 83.48;
const S28X = 86.7;
const S30X = 93.05;
const S31X = 96.27;
const S34X = 105.75;
const S35X = 108.97;
const S36X = 112.1;
const S37X = 115.32;

const sleeper = (
  rails /* {xl: number, xr: number}[] */,
  l /* sleeper length */
) => {
  const Y3 = 3.15;
  const Y2 = 2.48;
  const Y1 = 1.71;
  const Y0 = 0.0;
  const dxA = 2.1;
  const dxB = 0.8;
  const dxC = 1.6;
  const x = 0.0;
  const widthTop = 0.92;
  const widthBottom = 1.62;

  const points = rails.flatMap((r) => [
    [r.xl - dxA, Y2],
    [r.xl - dxB, Y3],
    [r.xr + dxB, Y3],
    [r.xr + dxA, Y2],
  ]);
  points[0][0] = x;
  points[1][0] = x + dxC;
  points[points.length - 2][0] = l - dxC;
  points[points.length - 1][0] = l;
  points.push([l, Y0]);
  points.push([x, Y0]);
  const shape2D = polygon({ points: points.reverse() });
  const shape3D = linear_extrude({ height: widthBottom }, shape2D);

  /*
▷ Y3        E ○─────○ D
|            /       \
|           /         \
▷ Y1     F ○           ○ C
│          │           │
│          │           │
│          │           │
▷ Y0     A ○───────────○ B

           △──△─────△──△
           X1 X2    X3 X4
*/

  const X1 = 0.0;
  const X2 = X1 + (widthBottom - widthTop) / 2;
  const X4 = X1 + widthBottom;
  const X3 = X4 - (X2 - X1);

  const profile2D = polygon({
    points: [
      [X1, Y0],
      [X4, Y0],
      [X4, Y1],
      [X3, Y3],
      [X2, Y3],
      [X1, Y1],
    ],
  });
  const profile3D = linear_extrude({ height: l }, profile2D);

  return intersection(
    shape3D.mirroredX().rotateZ(90).rotateY(90),
    profile3D.rotateX(90)
  ).mirroredY();
};

const sleepers = () => {
  // sizes in mm
  const L1 = 16.26;
  const L2 = 17.19;
  const L3 = 18.12;
  const L4 = 19.05;
  const L5 = 20.07;
  const L6 = 21.0;
  const L7 = 21.93;
  const L8 = 22.86;
  const L9 = 23.88;
  const L10 = 24.81;
  const L11 = 25.74;
  const L12 = 26.67;
  const L13 = 27.69;
  const L14 = 28.53;
  const L15 = 29.55;
  const L16 = 30.48;
  const L17 = 31.41;

  const S_5R = [
    { xl: 2.88, xr: 3.89 },
    { xl: 12.36, xr: 13.38 },
  ];
  const S_4R = S_5R;
  const S_3R = S_5R;
  const S_1R = S_5R;

  const S01R = [
    { xl: 2.88, xr: 5.16 },
    { xl: 13.55 - (5.16 - 2.88), xr: 13.55 },
  ];
  const S02R = [
    { xl: 2.88, xr: 5.16 },
    { xl: 13.72 - (5.16 - 2.88), xr: 13.72 },
  ];
  const S03R = [
    { xl: 2.88, xr: 5.16 },
    { xl: 13.8 - (5.16 - 2.88), xr: 13.8 },
  ];
  const S04R = [
    { xl: 2.88, xr: 5.16 },
    { xl: 13.97 - (5.16 - 2.88), xr: 13.97 },
  ];
  const S05R = [
    { xl: 2.88, xr: 5.16 },
    { xl: 14.14 - (5.16 - 2.88), xr: 14.14 },
  ];
  const S07R = [
    { xl: 2.88, xr: 5.33 },
    { xl: 14.48 - (5.33 - 2.88), xr: 4.48 },
  ];
  const S08R = [
    { xl: 2.88, xr: 5.5 },
    { xl: 14.65 - (5.5 - 2.88), xr: 14.65 },
  ];
  const S09R = [
    { xl: 2.88, xr: 5.67 },
    { xl: 14.9 - (5.67 - 2.88), xr: 14.9 },
  ];
  const S10R = [
    { xl: 2.88, xr: 5.84 },
    { xl: 15.16 - (5.84 - 2.88), xr: 15.16 },
  ];
  const S12R = [
    { xl: 2.88, xr: 6.27 },
    { xl: 15.75 - (6.27 - 2.88), xr: 15.75 },
  ];
  const S13R = [
    { xl: 2.88, xr: 6.6 },
    { xl: 16.17 - (6.6 - 2.88), xr: 16.17 },
  ];
  const S14R = [
    { xl: 2.88, xr: 6.86 },
    { xl: 16.51 - (6.86 - 2.88), xr: 16.51 },
  ];
  const S15R = [
    { xl: 2.88, xr: 7.28 },
    { xl: 16.85 - (7.28 - 2.88), xr: 16.85 },
  ];
  const S16R = [
    { xl: 2.88, xr: 7.7 },
    { xl: 17.36 - (7.7 - 2.88), xr: 17.36 },
  ];
  const S18R = [{ xl: 2.88, xr: 18.03 }];
  const S19R = [{ xl: 2.88, xr: 18.46 }];
  const S20R = [
    { xl: 2.88, xr: 3.89 },
    { xl: 8.13, xr: 13.38 },
    { xl: 17.7, xr: 18.97 },
  ];
  const S21R = [
    { xl: 2.88, xr: 3.89 },
    { xl: 8.55, xr: 13.38 },
    { xl: 18.2, xr: 19.39 },
  ];
  const S22R = [
    { xl: 2.88, xr: 3.89 },
    { xl: 9.06, xr: 13.38 },
    { xl: 18.71, xr: 19.9 },
  ];
  const S23R = [
    { xl: 2.88, xr: 3.89 },
    { xl: 9.48, xr: 13.38 },
    { xl: 19.22, xr: 20.4 },
  ];
  const S26R = [
    { xl: 2.88, xr: 5.0 },
    { xl: 11.09, xr: 13.46 },
    { xl: 19.64, xr: 22.01 },
  ];
  const S27R = [
    { xl: 2.88, xr: 4.91 },
    { xl: 11.26, xr: 13.97 },
    { xl: 20.15, xr: 22.61 },
  ];
  const S28R = [
    { xl: 2.88, xr: 4.91 },
    { xl: 11.26, xr: 14.56 },
    { xl: 20.66, xr: 23.11 },
  ];
  const S30R = [
    { xl: 2.88, xr: 3.89 },
    { xl: 12.36, xr: 14.48 },
    { xl: 22.86, xr: 24.13 },
  ];
  const S31R = [
    { xl: 2.88, xr: 3.89 },
    { xl: 12.36, xr: 14.99 },
    { xl: 23.37, xr: 24.72 },
  ];
  const S34R = [
    { xl: 2.88, xr: 3.89 },
    { xl: 12.36, xr: 16.68 },
    { xl: 25.06, xr: 26.5 },
  ];
  const S35R = [
    { xl: 2.88, xr: 3.89 },
    { xl: 12.36, xr: 17.19 },
    { xl: 25.57, xr: 26.92 },
  ];
  const S36R = [
    { xl: 2.88, xr: 3.89 },
    { xl: 12.36, xr: 17.78 },
    { xl: 26.08, xr: 27.43 },
  ];
  const S37R = [
    { xl: 2.88, xr: 3.89 },
    { xl: 12.36, xr: 18.29 },
    { xl: 26.59, xr: 27.94 },
  ];

  return union(
    translate([S_5X, 0, 0], sleeper(S_5R, L1)),
    translate([S_4X, 0, 0], sleeper(S_4R, L1)),
    translate([S_3X, 0, 0], sleeper(S_3R, L1)),
    translate([S_1X, 0, 0], sleeper(S_1R, L1)),
    translate([S01X, 0, 0], sleeper(S01R, L2)),
    translate([S02X, 0, 0], sleeper(S02R, L2)),
    translate([S03X, 0, 0], sleeper(S03R, L2)),
    translate([S04X, 0, 0], sleeper(S04R, L2)),
    translate([S05X, 0, 0], sleeper(S05R, L2)),
    translate([S07X, 0, 0], sleeper(S07R, L2)),
    translate([S08X, 0, 0], sleeper(S08R, L3)),
    translate([S09X, 0, 0], sleeper(S09R, L3)),
    translate([S10X, 0, 0], sleeper(S10R, L3)),
    translate([S12X, 0, 0], sleeper(S12R, L4)),
    translate([S13X, 0, 0], sleeper(S13R, L4)),
    translate([S14X, 0, 0], sleeper(S14R, L4)),
    translate([S15X, 0, 0], sleeper(S15R, L5)),
    translate([S16X, 0, 0], sleeper(S16R, L5)),
    translate([S18X, 0, 0], sleeper(S18R, L6)),
    translate([S19X, 0, 0], sleeper(S19R, L7)),
    translate([S20X, 0, 0], sleeper(S20R, L7)),
    translate([S21X, 0, 0], sleeper(S21R, L8)),
    translate([S22X, 0, 0], sleeper(S22R, L8)),
    translate([S23X, 0, 0], sleeper(S23R, L9)),
    translate([S26X, 0, 0], sleeper(S26R, L10)),
    translate([S27X, 0, 0], sleeper(S27R, L11)),
    translate([S28X, 0, 0], sleeper(S28R, L11)),
    translate([S30X, 0, 0], sleeper(S30R, L13)),
    translate([S31X, 0, 0], sleeper(S31R, L13)),
    translate([S34X, 0, 0], sleeper(S34R, L15)),
    translate([S35X, 0, 0], sleeper(S35R, L16)),
    translate([S36X, 0, 0], sleeper(S36R, L16)),
    translate([S37X, 0, 0], sleeper(S37R, L17))
  );
};

const rail = (top, bottom) => {
  const slack = 0.3;
  const topPoints = top.flatMap((p) => {
    const points = [];
    if (p.yl !== undefined) {
      points.push([p.xl, p.yl + slack]);
    }
    if (p.yr !== undefined) {
      points.push([p.xl + SWID, p.yr + slack]);
    }
    return points;
  });
  const bottomPoints = bottom.flatMap((p) => {
    const points = [];
    if (p.yl !== undefined) {
      points.push([p.xl, p.yl - slack]);
    }
    if (p.yr !== undefined) {
      points.push([p.xl + SWID, p.yr - slack]);
    }
    return points;
  });
  const rail2D = polygon({ points: bottomPoints.concat(topPoints.reverse()) });
  return linear_extrude({ height: 1.45 }, rail2D).translate([0, 0, 2.75]);
};

const rails = () => {
  const rail1 = rail(
    [
      { xl: S_5X, yl: 3.89 },
      { xl: S_1X, yr: 3.89 },
    ],
    [
      { xl: S_5X, yl: 2.88 },
      { xl: S_1X, yr: 2.88 },
    ]
  );
  const rail2 = rail(
    [
      { xl: S_5X, yl: 13.38 },
      { xl: S_1X, yr: 13.38 },
    ],
    [
      { xl: S_5X, yl: 12.36 },
      { xl: S_1X, yr: 12.36 },
    ]
  );
  const rail3 = rail(
    [
      { xl: S01X, yl: 13.46, yr: 13.55 },
      { xl: S02X, yl: 13.63, yr: 13.72 },
      { xl: S03X, yl: 13.72, yr: 13.8 },
      { xl: S04X, yl: 13.89, yr: 13.97 },
      { xl: S05X, yl: 14.05, yr: 14.14 },
      { xl: S07X, yl: 14.39, yr: 14.48 },
      { xl: S08X, yl: 14.56, yr: 14.65 },
      { xl: S09X, yl: 14.82, yr: 14.9 },
      { xl: S10X, yl: 15.07, yr: 15.16 },
      { xl: S12X, yl: 15.66, yr: 15.75 },
      { xl: S13X, yl: 16.0, yr: 16.17 },
      { xl: S14X, yl: 16.34, yr: 16.51 },
      { xl: S15X, yl: 16.68, yr: 16.85 },
      { xl: S16X, yl: 17.02, yr: 17.19 },
    ],
    [
      { xl: S01X, yl: 2.88 },
      { xl: S16X, yr: 2.88 },
    ]
  );

  const rail4 = rail(
    [
      { xl: S18X, yl: 3.89 },
      { xl: S23X, yr: 3.89 },
    ],
    [
      { xl: S18X, yl: 2.88 },
      { xl: S23X, yr: 2.88 },
    ]
  );

  const rail5 = rail(
    [
      { xl: S18X, yl: 8.21, yr: 8.38 },
      { xl: S19X, yl: 8.64, yr: 8.81 },
      { xl: S20X, yl: 9.14, yr: 9.31 },
      { xl: S21X, yl: 9.57, yr: 9.74 },
      { xl: S22X, yl: 10.08, yr: 10.24 },
      { xl: S23X, yl: 10.58, yr: 10.75 },
    ],
    [
      { xl: S18X, yl: 7.2, yr: 7.37 },
      { xl: S19X, yl: 7.62, yr: 7.79 },
      { xl: S20X, yl: 8.13, yr: 8.3 },
      { xl: S21X, yl: 8.55, yr: 8.72 },
      { xl: S22X, yl: 9.06, yr: 9.23 },
      { xl: S23X, yl: 9.48, yr: 9.74 },
    ]
  );
  const rail6 = rail(
    [
      { xl: S18X, yl: 13.38 },
      { xl: S23X, yr: 13.38 },
    ],
    [
      { xl: S18X, yl: 12.36 },
      { xl: S23X, yr: 12.36 },
    ]
  );
  const rail7 = rail(
    [
      { xl: S18X, yl: 17.86, yr: 18.03 },
      { xl: S19X, yl: 18.29, yr: 18.46 },
      { xl: S20X, yl: 18.71, yr: 18.97 },
      { xl: S21X, yl: 19.22, yr: 19.39 },
      { xl: S22X, yl: 19.73, yr: 19.9 },
      { xl: S23X, yl: 20.24, yr: 20.4 },
    ],
    [
      { xl: S18X, yl: 16.85, yr: 17.02 },
      { xl: S19X, yl: 17.27, yr: 17.44 },
      { xl: S20X, yl: 17.7, yr: 17.95 },
      { xl: S21X, yl: 18.2, yr: 18.37 },
      { xl: S22X, yl: 18.71, yr: 18.88 },
      { xl: S23X, yl: 19.22, yr: 19.39 },
    ]
  );
  const rail8 = rail(
    [
      { xl: S26X, yl: 21.76, yr: 22.01 },
      { xl: S27X, yl: 22.35, yr: 22.61 },
      { xl: S28X, yl: 22.86, yr: 23.11 },
    ],
    [
      { xl: S26X, yl: 2.88 },
      { xl: S28X, yr: 2.88 },
    ]
  );
  const rail9 = rail(
    [
      { xl: S30X, yl: 3.89 },
      { xl: S37X, yr: 3.89 },
    ],
    [
      { xl: S30X, yl: 2.88 },
      { xl: S37X, yr: 2.88 },
    ]
  );
  const rail10 = rail(
    [
      { xl: S30X, yl: 14.22 },
      { xl: S31X, yr: 14.99 },
    ],
    [
      { xl: S30X, yl: 12.36 },
      { xl: S31X, yr: 12.36 },
    ]
  );
  const rail11 = rail(
    [
      { xl: S30X, yl: 23.88 },
      { xl: S37X, yr: 27.94 },
    ],
    [
      { xl: S30X, yl: 22.86 },
      { xl: S37X, yr: 26.84 },
    ]
  );
  const rail12 = rail(
    [
      { xl: S34X, yl: 13.38 },
      { xl: S37X, yr: 13.38 },
    ],
    [
      { xl: S34X, yl: 12.36 },
      { xl: S37X, yr: 12.36 },
    ]
  );
  const rail13 = rail(
    [
      { xl: S34X, yl: 16.43 },
      { xl: S37X, yr: 18.29 },
    ],
    [
      { xl: S34X, yl: 15.32 },
      { xl: S37X, yr: 17.19 },
    ]
  );

  return union(
    rail1,
    rail2,
    rail3,
    rail4,
    rail5,
    rail6,
    rail7,
    rail8,
    rail9,
    rail10,
    rail11,
    rail12,
    rail13
  );
};

const connector = (top) => {
  const shiftTop = 0.3;
  const shiftBottom = 1.0 + 0.3;

  const topPoints = top.flatMap((p) => {
    const points = [];
    if (p.yl !== undefined) {
      points.push([p.xl, p.yl + shiftTop]);
    }
    if (p.yr !== undefined) {
      points.push([p.xl + SWID, p.yr + shiftTop]);
    }
    return points;
  });
  const bottomPoints = top.flatMap((p) => {
    const points = [];
    if (p.yl !== undefined) {
      points.push([p.xl, p.yl - shiftBottom]);
    }
    if (p.yr !== undefined) {
      points.push([p.xl + SWID, p.yr - shiftBottom]);
    }
    return points;
  });
  const connector2D = polygon({
    points: bottomPoints.concat(topPoints.reverse()),
  });
  return linear_extrude({ height: 0.5 }, connector2D);
};

const connectors = () => {
  const connector1 = connector([
    { xl: S_5X, yl: 3.89 },
    { xl: S37X, yl: 3.89 },
  ]);
  const connector2 = connector([
    { xl: S_5X, yl: 13.38 },
    { xl: S00X, yl: 13.38 },
    { xl: S01X, yl: 13.46, yr: 13.55 },
    { xl: S02X, yl: 13.63, yr: 13.72 },
    { xl: S03X, yl: 13.72, yr: 13.8 },
    { xl: S04X, yl: 13.89, yr: 13.97 },
    { xl: S05X, yl: 14.05, yr: 14.14 },
    { xl: S07X, yl: 14.39, yr: 14.48 },
    { xl: S08X, yl: 14.56, yr: 14.65 },
    { xl: S09X, yl: 14.82, yr: 14.9 },
    { xl: S10X, yl: 15.07, yr: 15.16 },
    { xl: S12X, yl: 15.66, yr: 15.75 },
    { xl: S13X, yl: 16.0, yr: 16.17 },
    { xl: S14X, yl: 16.34, yr: 16.51 },
    { xl: S15X, yl: 16.68, yr: 16.85 },
    { xl: S16X, yl: 17.02, yr: 17.19 },
    { xl: S18X, yl: 17.86, yr: 18.03 },
    { xl: S19X, yl: 18.29, yr: 18.46 },
    { xl: S20X, yl: 18.71, yr: 18.97 },
    { xl: S21X, yl: 19.22, yr: 19.39 },
    { xl: S22X, yl: 19.73, yr: 19.9 },
    { xl: S23X, yl: 20.24, yr: 20.4 },
    { xl: S26X, yl: 21.76, yr: 22.01 },
    { xl: S27X, yl: 22.35, yr: 22.61 },
    { xl: S28X, yl: 22.86, yr: 23.11 },
    { xl: S30X, yl: 23.88 },
    { xl: S37X, yr: 27.94 },
  ]);
  return union(connector1, connector2);
};

const support = (x, y) => {
  const baseL = 6.0;
  const baseW = 3.0;
  const baseH = 0.3;
  const poleR = 0.5;
  const poleH = 5.0;

  const base = intersection(
    cube({ size: [baseL, baseW, baseH * 2], center: true }),
    polyhedron({
      points: [
        // points at base
        [-baseL / 2, -baseW / 2, 0],
        [-baseL / 2, baseW / 2, 0],
        [baseL / 2, baseW / 2, 0],
        [baseL / 2, -baseW / 2, 0],
        // apex point
        [0, 0, -baseL],
      ],
      triangles: [
        [0, 1, 3],
        [2, 3, 1],
        [0, 4, 1],
        [1, 4, 2],
        [2, 4, 3],
        [3, 4, 0],
      ],
    })
  ).translate(0, 0, baseH);

  const pole = cylinder({ r: poleR, h: poleH });
  return union(pole, base).translate([x, y, -5.0]);
};

const supports = (y) => {
  return union(
    support(S_5X + SWID / 2, 13.38 - 0.5),
    support(S_5X + SWID / 2, (13.38 + 3.89) / 2 - 0.5),
    support(S_5X + SWID / 2, 3.89 - 0.5)
  );
};

const main = () => {
  return union(difference(sleepers(), rails()), connectors(), supports());
};
