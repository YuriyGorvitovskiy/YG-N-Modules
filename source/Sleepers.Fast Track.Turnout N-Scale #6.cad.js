/*
300 px => 1"
  1 px =>   0.08466666667mm

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
            △───────────△───────────────────────────────────────────────────△────────────────────△──────────────△───────────────────────△
              Straight                    Moving R2 and R3                     Fixed R2 and R3     Cross R2 x R3          Straight 
*/

// Sleeper Length
// mm = ROUND((1944 − px) × 0.08466666667, 2)
const SL1 = 16.26; //  1752 px
const SL2 = 17.19; //  1741 px
const SL3 = 18.12; //  1730 px
const SL4 = 19.05; //  1719 px
const SL5 = 20.07; //  1707 px
const SL6 = 21.0; //   1696 px
const SL7 = 21.93; //  1685 px
const SL8 = 22.86; //  1674 px
const SL9 = 23.88; //  1662 px
const SL10 = 24.81; // 1651 px
const SL11 = 25.74; // 1640 px
const SL12 = 26.67; // 1629 px
const SL13 = 27.69; // 1617 px
const SL14 = 28.53; // 1607 px
const SL15 = 29.55; // 1595 px
const SL16 = 30.48; // 1584 px
const SL17 = 31.41; // 1573 px

// Drawing sleeper width
const DSW = 1.62;

// Sleepers X (left side) position
// mm = ROUND((px - 807) × 0.08466666667, 2)
const S_5X = -15.07; //  629 px
const S_4X = -11.85; //  667 px
const S_3X = -8.72; //   704 px
const S_2X = -5.5; //    742 px
const S_1X = -2.54; //   777 px
const S00X = -0.76; //   798 px
const S01X = 1.02; //    819 px
const S02X = 3.98; //    854 px
const S03X = 7.2; //     892 px
const S04X = 10.41; //   930 px
const S05X = 13.55; //   967 px
const S06X = 16.76; //  1005 px
const S07X = 19.9; //   1042 px
const S08X = 23.11; //  1080 px
const S09X = 26.25; //  1117 px
const S10X = 29.46; //  1155 px
const S11X = 32.68; //  1193 px
const S12X = 35.81; //  1230 px
const S13X = 38.95; //  1267 px
const S14X = 42.16; //  1305 px
const S15X = 45.38; //  1343 px
const S16X = 48.51; //  1380 px
const S17X = 51.73; //  1418 px
const S18X = 54.86; //  1455 px
const S19X = 58.08; //  1493 px
const S20X = 61.3; //   1531 px
const S21X = 64.43; //  1568 px
const S22X = 67.65; //  1606 px
const S23X = 70.78; //  1643 px
const S24X = 74.0; //   1681 px
const S25X = 77.22; //  1719 px
const S26X = 80.35; //  1756 px
const S27X = 83.48; //  1793 px
const S28X = 86.7; //   1831 px
const S29X = 89.92; //  1869 px
const S30X = 93.05; //  1906 px
const S31X = 96.27; //  1944 px
const S32X = 99.4; //   1981 px
const S33X = 102.7; //  2020 px
const S34X = 105.75; // 2056 px
const S35X = 108.97; // 2094 px
const S36X = 112.1; //  2131 px
const S37X = 115.32; // 2169 px

/*

                                                                                                                              +--------+
                                                                                                                     +--------+   R4   |
                                                                                                            +--------+   R4   +--------+
                                                                                                    +-------+   R4   +--------+         
                                                                                          +--------+  R4   +--------+                  
                                                                                +---------+   R4   +-------+                           
                                                                      +---------+   R4    +--------+                                   
                                                        +-------------+   R4    +---------+                                  +--------+
                                            +-----------+     R4      +---------+                                   +--------+   R2   |
                        +--------------------+    R4     +-------------+                                    +--------+   R2   +--------+
            +-----------+         R4         +-----------+------------------------------------------+-------+   R2   +--------+--------+
            |    R4     +--------------------+         R3                                  +--------+  R2   +--------+   R3            |
            +-----------+--------------------------------------------------------+---------+   R2   +-------+--------------------------+
                                                                      +---------+   R2    +--------+                                   
                                                        +--------------+   R2    +---------+                                            
                                            +----------+      R2      +---------+                                                      
                        +--------------------+    R2    +--------------+                                                                
            +-----------+--------------------+----------+------------------------------------------------------------------------------+
            |                                                            R1                                                            |
            +--------------------------------------------------------------------------------------------------------------------------+
     
              +--------+ 
              |        |
              |      --+ R4S##(xl,y3)
              |   --/  |
 R4S##(xl,yl) +--/     |
              |   R4   |
              |      --+ 
              |   --/  |
              +--/     |
              |        |
              |        |
              |        |
              |        |
 R3S##(xl,yl) +--------+ R3S##(xl,yr)
              |        |
              |   R3   |
              |        |
              +--------+ 
              |        |
              |   L#   |
              |        |
              |        |
              |      --+ R2S##(xl,yr)
              |   --/  |
 R2S##(xl,yl) +--/     |
              |   R2   |
              |      --+ 
              |   --/  |
              +--/     |
              |        |
              |        |
              |        |
              |        |
 R1S##(xl,yl) +--------+ R1S##(xl,yr)
              |        |
              |   R1   |
              |        |
              +--------+ 
              |        |
              |        |
              +--------+
*/
// Drawing Rail Widht
const DRW = 1.01;

/* Drawing Rail 1 - Sleeper position, drawing base
            
         |  |        |   
         |  | sleeper|
         |  |        |   
  yr, yl ▷  +--------+
         |  |        |
         |  |   R1   |
         |  |        |
yl - DRW ▷  +--------+
         |  |        |
         |  +--------+
         |
         +──△────────△─
            xl    xl + DSW
*/
const DR1S_5 = { xl: S_5X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px
const DR1S_1 = { xl: S_1X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px
const DR1S00 = { xl: S00X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px
const DR1S01 = { xl: S01X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px
const DR1S16 = { xl: S16X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px
const DR1S18 = { xl: S18X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px
const DR1S23 = { xl: S23X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px
const DR1S26 = { xl: S26X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px
const DR1S28 = { xl: S28X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px
const DR1S30 = { xl: S30X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px
const DR1S37 = { xl: S37X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px

/* Drawing Guardrail 1  - Sleeper position */
const DGR1S26 = { xl: S26X, yl: 5.0, yr: 4.91 }; //  1885 px, 1886 px
const DGR1S27 = { xl: S27X, yl: 4.91, yr: 4.91 }; // 1886 px, 1886 px
const DGR1S28 = { xl: S28X, yl: 4.91, yr: 4.91 }; // 1886 px, 1886 px

/* Drawing Rail 2 - Sleeper position, drawing base


         |  |        |
         |  | sleeper|
      yr ▷  |      --+
         |  |   --/  |
      yl ▷  +--/     |
         |  |   R2   |
         |  |      --+
         |  |   --/  |
yl - DRW ▷  +--/     |
         |  |        |
         |       
         +──△────────△─
            xl    xl + DSW
*/
const DR2S_5 = { xl: S_5X, yl: 3.89, yr: 3.89 }; //   1898 px, 1898 px
const DR2S_4 = { xl: S_4X, yl: 3.89, yr: 3.89 }; //   1898 px, 1898 px
const DR2S_3 = { xl: S_3X, yl: 3.89, yr: 3.89 }; //   1898 px, 1898 px
const DR2S_2 = { xl: S_2X, yl: 3.89, yr: 3.89 }; //   1898 px, 1898 px
const DR2S_1 = { xl: S_1X, yl: 3.89, yr: 3.89 }; //   1898 px, 1898 px
const DR2S00 = { xl: S00X, yl: 5.16, yr: 5.16 }; //   1883 px, 1883 px
const DR2S01 = { xl: S01X, yl: 5.16, yr: 5.16 }; //   1883 px, 1883 px
const DR2S02 = { xl: S02X, yl: 5.16, yr: 5.16 }; //   1883 px, 1883 px
const DR2S03 = { xl: S03X, yl: 5.16, yr: 5.16 }; //   1883 px, 1883 px
const DR2S04 = { xl: S04X, yl: 5.16, yr: 5.16 }; //   1883 px, 1883 px
const DR2S05 = { xl: S05X, yl: 5.16, yr: 5.16 }; //   1883 px, 1883 px
const DR2S07 = { xl: S07X, yl: 5.25, yr: 5.33 }; //   1882 px, 1881 px
const DR2S08 = { xl: S08X, yl: 5.42, yr: 5.5 }; //    1880 px, 1879 px
const DR2S09 = { xl: S09X, yl: 5.59, yr: 5.67 }; //   1878 px, 1877 px
const DR2S10 = { xl: S10X, yl: 5.76, yr: 5.84 }; //   1876 px, 1875 px
const DR2S12 = { xl: S12X, yl: 6.18, yr: 6.27 }; //   1871 px, 1870 px
const DR2S13 = { xl: S13X, yl: 6.43, yr: 6.6 }; //    1868 px, 1866 px
const DR2S14 = { xl: S14X, yl: 6.77, yr: 6.86 }; //   1864 px, 1863 px
const DR2S15 = { xl: S15X, yl: 7.11, yr: 7.28 }; //   1860 px, 1858 px
const DR2S16 = { xl: S16X, yl: 7.54, yr: 7.7 }; //    1855 px, 1853 px
const DR2S18 = { xl: S18X, yl: 8.21, yr: 8.38 }; //   1847 px, 1845 px
const DR2S19 = { xl: S19X, yl: 8.64, yr: 8.81 }; //   1842 px, 1840 px
const DR2S20 = { xl: S20X, yl: 9.14, yr: 9.31 }; //   1836 px, 1834 px
const DR2S21 = { xl: S21X, yl: 9.57, yr: 9.74 }; //   1831 px, 1829 px
const DR2S22 = { xl: S22X, yl: 10.08, yr: 10.24 }; // 1825 px, 1823 px
const DR2S23 = { xl: S23X, yl: 10.58, yr: 10.75 }; // 1819 px, 1817 px
const DR2S30 = { xl: S30X, yl: 14.22, yr: 14.48 }; // 1776 px, 1773 px
const DR2S31 = { xl: S31X, yl: 14.73, yr: 14.99 }; // 1770 px, 1767 px
const DR2S34 = { xl: S34X, yl: 16.43, yr: 16.68 }; // 1750 px, 1747 px
const DR2S35 = { xl: S35X, yl: 16.93, yr: 17.19 }; // 1744 px, 1741 px
const DR2S36 = { xl: S36X, yl: 17.53, yr: 17.78 }; // 1737 px, 1734 px
const DR2S37 = { xl: S37X, yl: 18.03, yr: 18.29 }; // 1731 px, 1728 px

/* Drawing Guardrail 2 - Sleeper position */
const DGR2S26 = { xl: S26X, yl: 13.38, yr: 13.46 }; // 1786 px, 1785 px
const DGR2S27 = { xl: S27X, yl: 13.72, yr: 13.97 }; // 1782 px, 1779 px
const DGR2S28 = { xl: S28X, yl: 14.31, yr: 14.56 }; // 1775 px, 1772 px

/* Drawing Rail 3 - Sleeper position, drawing base
            
         |  |        |   
         |  | sleeper|
         |  |        |   
  yr, yl ▷  +--------+
         |  |        |
         |  |   R3   |
         |  |        |
yl - DRW ▷  +--------+
         |  |        |
         |
         +──△────────△─
            xl    xl + DSW
*/
const DR3S_5 = { xl: S_5X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR3S_1 = { xl: S_1X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR3S00 = { xl: S00X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR3S01 = { xl: S01X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR3S16 = { xl: S16X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR3S18 = { xl: S18X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR3S23 = { xl: S23X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR3S26 = { xl: S26X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR3S28 = { xl: S28X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR3S30 = { xl: S30X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR3S37 = { xl: S37X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px

/* Drawing Guardrail 3 - Sleeper position */
const DGR3S26 = { xl: S26X, yl: 11.09 + DRW, yr: 11.26 + DRW }; // 1813 px, 1811 px
const DGR3S27 = { xl: S27X, yl: 11.26 + DRW, yr: 11.26 + DRW }; // 1886 px, 1886 px
const DGR3S28 = { xl: S28X, yl: 11.26 + DRW, yr: 11.26 + DRW }; // 1886 px, 1886 px

/* Drawing Rail 4 - Sleeper position, drawing base
            +--------+
         |  | sleeper|
      yr ▷  |      --+
         |  |   --/  |
      yl ▷  +--/     |
         |  |   R4   |
         |  |      --+
         |  |   --/  |
yl - DRW ▷  +--/     |
         |  |        |
         |       
         +──△────────△─
            xl    xl + DSW
*/
const DR4S_5 = { xl: S_5X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR4S_4 = { xl: S_4X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR4S_3 = { xl: S_3X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR4S_2 = { xl: S_2X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR4S_1 = { xl: S_1X, yl: 13.38, yr: 13.38 }; // 1786 px, 1786 px
const DR4S00 = { xl: S00X, yl: 13.38, yr: 13.46 }; // 1786 px, 1785 px
const DR4S01 = { xl: S01X, yl: 13.46, yr: 13.55 }; // 1785 px, 1784 px
const DR4S02 = { xl: S02X, yl: 13.63, yr: 13.72 }; // 1783 px, 1782 px
const DR4S03 = { xl: S03X, yl: 13.72, yr: 13.8 }; //  1782 px, 1781 px
const DR4S04 = { xl: S04X, yl: 13.89, yr: 13.97 }; // 1780 px, 1779 px
const DR4S05 = { xl: S05X, yl: 14.05, yr: 14.14 }; // 1778 px, 1777 px
const DR4S06 = { xl: S06X, yl: 14.31, yr: 14.39 }; // 1775 px, 1774 px
const DR4S07 = { xl: S07X, yl: 14.39, yr: 14.48 }; // 1774 px, 1773 px
const DR4S08 = { xl: S08X, yl: 14.56, yr: 14.65 }; // 1772 px, 1771 px
const DR4S09 = { xl: S09X, yl: 14.82, yr: 14.9 }; //  1769 px, 1768 px
const DR4S10 = { xl: S10X, yl: 15.07, yr: 15.16 }; // 1766 px, 1766 px
const DR4S11 = { xl: S11X, yl: 15.41, yr: 15.58 }; // 1762 px, 1760 px
const DR4S12 = { xl: S12X, yl: 15.66, yr: 15.75 }; // 1759 px, 1758 px
const DR4S13 = { xl: S13X, yl: 16.0, yr: 16.17 }; //  1755 px, 1753 px
const DR4S14 = { xl: S14X, yl: 16.34, yr: 16.51 }; // 1751 px, 1749 px
const DR4S15 = { xl: S15X, yl: 16.68, yr: 16.85 }; // 1747 px, 1745 px
const DR4S16 = { xl: S16X, yl: 17.02, yr: 17.19 }; // 1743 px, 1741 px
const DR4S17 = { xl: S17X, yl: 17.53, yr: 17.7 }; //  1737 px, 1735 px
const DR4S18 = { xl: S18X, yl: 17.86, yr: 18.03 }; // 1733 px, 1731 px
const DR4S19 = { xl: S19X, yl: 18.29, yr: 18.46 }; // 1728 px, 1726 px
const DR4S20 = { xl: S20X, yl: 18.71, yr: 18.97 }; // 1723 px, 1720 px
const DR4S21 = { xl: S21X, yl: 19.22, yr: 19.39 }; // 1717 px, 1715 px
const DR4S22 = { xl: S22X, yl: 19.73, yr: 19.9 }; //  1711 px, 1709 px
const DR4S23 = { xl: S23X, yl: 20.24, yr: 20.4 }; //  1705 px, 1703 px
const DR4S24 = { xl: S24X, yl: 20.83, yr: 21.08 }; // 1698 px, 1695 px
const DR4S25 = { xl: S25X, yl: 21.34, yr: 21.59 }; // 1692 px, 1689 px
const DR4S26 = { xl: S26X, yl: 21.76, yr: 22.01 }; // 1687 px, 1684 px
const DR4S27 = { xl: S27X, yl: 22.35, yr: 22.61 }; // 1680 px, 1677 px
const DR4S28 = { xl: S28X, yl: 22.86, yr: 23.11 }; // 1674 px, 1671 px
const DR4S29 = { xl: S29X, yl: 23.45, yr: 23.71 }; // 1667 px, 1664 px
const DR4S30 = { xl: S30X, yl: 23.88, yr: 24.13 }; // 1662 px, 1659 px
const DR4S31 = { xl: S31X, yl: 24.47, yr: 24.72 }; // 1655 px, 1652 px
const DR4S32 = { xl: S32X, yl: 25.06, yr: 25.32 }; // 1648 px, 1645 px
const DR4S33 = { xl: S33X, yl: 25.57, yr: 25.82 }; // 1642 px, 1639 px
const DR4S34 = { xl: S34X, yl: 26.08, yr: 26.5 }; //  1636 px, 1631 px
const DR4S35 = { xl: S35X, yl: 26.67, yr: 26.92 }; // 1629 px, 1626 px
const DR4S36 = { xl: S36X, yl: 27.18, yr: 27.43 }; // 1623 px, 1620 px
const DR4S37 = { xl: S37X, yl: 27.69, yr: 27.94 }; // 1617 px, 1614 px

/* Drawing Guardrail 4  - Sleeper position */
const DGR4S26 = { xl: S26X, yl: 19.64 + DRW, yr: 19.9 + DRW }; //  1712 px, 1709 px
const DGR4S27 = { xl: S27X, yl: 20.15 + DRW, yr: 20.4 + DRW }; //  1706 px, 1703 px
const DGR4S28 = { xl: S28X, yl: 20.66 + DRW, yr: 20.83 + DRW }; // 1700 px, 1698 px

/*
  Because drawing is not represent correct rails width and distance between the rails 
  we should adjust rails position.
  Rails curvature will be preserved from rail 2 and rail 3

  Assumptions:
    - We are using ME N-scale code 55 rails
    - Distance between top of the rails is 9.00 mm 
*/
const N_TOP_DISTANCE = 9.0;
const MEN55_TOP_WIDTH = 0.66;
const MEN55_FOOT_WIDTH = 1.37;
const RAIL_CLEARANCE = 0.3;

const R1S_5_CENTER = (SL1 - N_TOP_DISTANCE - MEN55_TOP_WIDTH) / 2;
const R4S_5_CENTER = (SL1 + N_TOP_DISTANCE + MEN55_TOP_WIDTH) / 2;

const R1D2A_SHIFT = R1S_5_CENTER - DR1S_5.yl;
const R4D2A_SHIFT = R4S_5_CENTER - DR4S_5.yl;

// Rail Actual Width
const RAW = MEN55_FOOT_WIDTH + RAIL_CLEARANCE;

const drawingToActualShift = (d, s) => ({
  xl: d.xl,
  yl: d.yl + s,
  yr: d.yr + s,
});

const R1S_5 = drawingToActualShift(DR1S_5, R1D2A_SHIFT);
const R1S_1 = drawingToActualShift(DR1S_1, R1D2A_SHIFT);
const R1S00 = drawingToActualShift(DR1S00, R1D2A_SHIFT);
const R1S01 = drawingToActualShift(DR1S01, R1D2A_SHIFT);
const R1S16 = drawingToActualShift(DR1S16, R1D2A_SHIFT);
const R1S18 = drawingToActualShift(DR1S18, R1D2A_SHIFT);
const R1S23 = drawingToActualShift(DR1S23, R1D2A_SHIFT);
const R1S26 = drawingToActualShift(DR1S26, R1D2A_SHIFT);
const R1S28 = drawingToActualShift(DR1S28, R1D2A_SHIFT);
const R1S30 = drawingToActualShift(DR1S30, R1D2A_SHIFT);
const R1S37 = drawingToActualShift(DR1S37, R1D2A_SHIFT);

const R4S_5 = drawingToActualShift(DR4S_5, R4D2A_SHIFT);
const R4S_4 = drawingToActualShift(DR4S_4, R4D2A_SHIFT);
const R4S_3 = drawingToActualShift(DR4S_3, R4D2A_SHIFT);
const R4S_2 = drawingToActualShift(DR4S_2, R4D2A_SHIFT);
const R4S_1 = drawingToActualShift(DR4S_1, R4D2A_SHIFT);
const R4S00 = drawingToActualShift(DR4S00, R4D2A_SHIFT);
const R4S01 = drawingToActualShift(DR4S01, R4D2A_SHIFT);
const R4S02 = drawingToActualShift(DR4S02, R4D2A_SHIFT);
const R4S03 = drawingToActualShift(DR4S03, R4D2A_SHIFT);
const R4S04 = drawingToActualShift(DR4S04, R4D2A_SHIFT);
const R4S05 = drawingToActualShift(DR4S05, R4D2A_SHIFT);
const R4S06 = drawingToActualShift(DR4S06, R4D2A_SHIFT);
const R4S07 = drawingToActualShift(DR4S07, R4D2A_SHIFT);
const R4S08 = drawingToActualShift(DR4S08, R4D2A_SHIFT);
const R4S09 = drawingToActualShift(DR4S09, R4D2A_SHIFT);
const R4S10 = drawingToActualShift(DR4S10, R4D2A_SHIFT);
const R4S11 = drawingToActualShift(DR4S11, R4D2A_SHIFT);
const R4S12 = drawingToActualShift(DR4S12, R4D2A_SHIFT);
const R4S13 = drawingToActualShift(DR4S13, R4D2A_SHIFT);
const R4S14 = drawingToActualShift(DR4S14, R4D2A_SHIFT);
const R4S15 = drawingToActualShift(DR4S15, R4D2A_SHIFT);
const R4S16 = drawingToActualShift(DR4S16, R4D2A_SHIFT);
const R4S17 = drawingToActualShift(DR4S17, R4D2A_SHIFT);
const R4S18 = drawingToActualShift(DR4S18, R4D2A_SHIFT);
const R4S19 = drawingToActualShift(DR4S19, R4D2A_SHIFT);
const R4S20 = drawingToActualShift(DR4S20, R4D2A_SHIFT);
const R4S21 = drawingToActualShift(DR4S21, R4D2A_SHIFT);
const R4S22 = drawingToActualShift(DR4S22, R4D2A_SHIFT);
const R4S23 = drawingToActualShift(DR4S23, R4D2A_SHIFT);
const R4S24 = drawingToActualShift(DR4S24, R4D2A_SHIFT);
const R4S25 = drawingToActualShift(DR4S25, R4D2A_SHIFT);
const R4S26 = drawingToActualShift(DR4S26, R4D2A_SHIFT);
const R4S27 = drawingToActualShift(DR4S27, R4D2A_SHIFT);
const R4S28 = drawingToActualShift(DR4S28, R4D2A_SHIFT);
const R4S29 = drawingToActualShift(DR4S29, R4D2A_SHIFT);
const R4S30 = drawingToActualShift(DR4S30, R4D2A_SHIFT);
const R4S31 = drawingToActualShift(DR4S31, R4D2A_SHIFT);
const R4S32 = drawingToActualShift(DR4S32, R4D2A_SHIFT);
const R4S33 = drawingToActualShift(DR4S33, R4D2A_SHIFT);
const R4S34 = drawingToActualShift(DR4S34, R4D2A_SHIFT);
const R4S35 = drawingToActualShift(DR4S35, R4D2A_SHIFT);
const R4S36 = drawingToActualShift(DR4S36, R4D2A_SHIFT);
const R4S37 = drawingToActualShift(DR4S37, R4D2A_SHIFT);
/*
300 px => 1"
1 px =>   0.08466666667mm
~ 1 px => 0.08477842003mm



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

  const S_5R = [
    { xl: 2.88, xr: 3.89 },
    { xl: 12.36, xr: 13.38 },
  ];
  const S_4R = S_5R;
  const S_3R = S_5R;

  const S_1R = [
    { xl: 2.88, xr: 5.16 },
    { xl: 13.55 - (5.16 - 2.88), xr: 13.55 },
  ];
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
    translate([S_5X, 0, 0], sleeper(S_5R, SL1)),
    translate([S_4X, 0, 0], sleeper(S_4R, SL1)),
    translate([S_3X, 0, 0], sleeper(S_3R, SL1)),
    translate([S_1X, 0, 0], sleeper(S_1R, SL1)),
    translate([S01X, 0, 0], sleeper(S01R, SL2)),
    translate([S02X, 0, 0], sleeper(S02R, SL2)),
    translate([S03X, 0, 0], sleeper(S03R, SL2)),
    translate([S04X, 0, 0], sleeper(S04R, SL2)),
    translate([S05X, 0, 0], sleeper(S05R, SL2)),
    translate([S07X, 0, 0], sleeper(S07R, SL2)),
    translate([S08X, 0, 0], sleeper(S08R, SL3)),
    translate([S09X, 0, 0], sleeper(S09R, SL3)),
    translate([S10X, 0, 0], sleeper(S10R, SL3)),
    translate([S12X, 0, 0], sleeper(S12R, SL4)),
    translate([S13X, 0, 0], sleeper(S13R, SL4)),
    translate([S14X, 0, 0], sleeper(S14R, SL4)),
    translate([S15X, 0, 0], sleeper(S15R, SL5)),
    translate([S16X, 0, 0], sleeper(S16R, SL5)),
    translate([S18X, 0, 0], sleeper(S18R, SL6)),
    translate([S19X, 0, 0], sleeper(S19R, SL7)),
    translate([S20X, 0, 0], sleeper(S20R, SL7)),
    translate([S21X, 0, 0], sleeper(S21R, SL8)),
    translate([S22X, 0, 0], sleeper(S22R, SL8)),
    translate([S23X, 0, 0], sleeper(S23R, SL9)),
    translate([S26X, 0, 0], sleeper(S26R, SL10)),
    translate([S27X, 0, 0], sleeper(S27R, SL11)),
    translate([S28X, 0, 0], sleeper(S28R, SL11)),
    translate([S30X, 0, 0], sleeper(S30R, SL13)),
    translate([S31X, 0, 0], sleeper(S31R, SL13)),
    translate([S34X, 0, 0], sleeper(S34R, SL15)),
    translate([S35X, 0, 0], sleeper(S35R, SL16)),
    translate([S36X, 0, 0], sleeper(S36R, SL16)),
    translate([S37X, 0, 0], sleeper(S37R, SL17))
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
      points.push([p.xl + DSW, p.yr + slack]);
    }
    return points;
  });
  const bottomPoints = bottom.flatMap((p) => {
    const points = [];
    if (p.yl !== undefined) {
      points.push([p.xl, p.yl - slack]);
    }
    if (p.yr !== undefined) {
      points.push([p.xl + DSW, p.yr - slack]);
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
      { xl: S_3X, yr: 3.89 },
    ],
    [
      { xl: S_5X, yl: 2.88 },
      { xl: S_3X, yr: 2.88 },
    ]
  );
  const rail2 = rail(
    [
      { xl: S_5X, yl: 13.38 },
      { xl: S_3X, yr: 13.38 },
    ],
    [
      { xl: S_5X, yl: 12.36 },
      { xl: S_3X, yr: 12.36 },
    ]
  );
  const rail3 = rail(
    [
      { xl: S_1X, yl: 13.38, yr: 13.38 },
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
      { xl: S_1X, yl: 2.88 },
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
  const shift = RAW / 2;

  const topPoints = top.flatMap((p) => [
    [p.xl, p.yl + shift],
    [p.xl + DSW, p.yr + shift],
  ]);
  const bottomPoints = top.flatMap((p) => [
    [p.xl, p.yl - shift],
    [p.xl + DSW, p.yr - shift],
  ]);
  const connector2D = polygon({
    points: bottomPoints.concat(topPoints.reverse()),
  });
  return linear_extrude({ height: 1.75 }, connector2D);
};

const connectors = () => {
  const connector1 = connector([R1S_5, R1S37]);
  const connector2 = connector([
    R4S_5,
    R4S00,
    R4S01,
    R4S02,
    R4S03,
    R4S04,
    R4S05,
    R4S06,
    R4S07,
    R4S08,
    R4S09,
    R4S10,
    R4S11,
    R4S12,
    R4S13,
    R4S14,
    R4S15,
    R4S16,
    R4S17,
    R4S18,
    R4S19,
    R4S20,
    R4S21,
    R4S22,
    R4S23,
    R4S24,
    R4S25,
    R4S26,
    R4S27,
    R4S28,
    R4S29,
    R4S30,
    R4S31,
    R4S32,
    R4S33,
    R4S34,
    R4S35,
    R4S36,
    R4S37,
  ]);
  return union(connector1, connector2);
};

const support = (x, y) => {
  const poleRT = 0.4;
  const poleRB = 1.0;
  const poleH = 5.1;
  const baseZ = -5.0;

  return cylinder({ r1: poleRB, r2: poleRT, h: poleH }).translate([
    x,
    y,
    baseZ,
  ]);
};

const sleeperSupport = (str, railOnly) => {
  // Maximum Support Spacing
  const MSS = 5.0;

  const x = str.xl + DSW / 2;
  const yts = (str.yl + str.yr) / 2;
  const ybs = R1S00.yl;

  const supports = [support(x, yts), support(x, ybs)];
  if (!railOnly) {
    const spaces = Math.ceil((yts - ybs) / MSS);
    for (let i = 1; i < spaces; ++i) {
      supports.push(support(x, ybs + ((yts - ybs) * i) / spaces));
    }
  }
  return union(supports);
};

const baseSupport = () => {
  const extraX = 3.0;
  const extraY = 3.0;
  const baseH = 0.3;
  const baseZ = -5.0;

  const left = R4S_5.xl - extraX;
  const right = R4S37.xl + DSW + extraX;
  const bottom = 0.0 - extraY;
  const leftTop = SL1 + extraY;
  const rightTop = SL17 + extraY;

  return intersection(
    cube({
      size: [right - left, rightTop - bottom, baseH],
      center: false,
    }).translate([left, bottom, -baseH]),
    polyhedron({
      points: [
        // points at base
        [left, bottom, 0],
        [left, leftTop, 0],
        [right, rightTop, 0],
        [right, bottom, 0],
        // apex point
        [
          (left + right) / 2,
          ((rightTop + leftTop) / 2 + bottom) / 2,
          left - right,
        ],
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
  ).translate([0, 0, baseZ]);
};

const supports = () => {
  return union(
    sleeperSupport(R4S_5),
    sleeperSupport(R4S_4),
    sleeperSupport(R4S_3),
    sleeperSupport(R4S_2, true),
    sleeperSupport(R4S_1),
    sleeperSupport(R4S01),
    sleeperSupport(R4S02),
    sleeperSupport(R4S03),
    sleeperSupport(R4S04),
    sleeperSupport(R4S05),
    sleeperSupport(R4S06, true),
    sleeperSupport(R4S07),
    sleeperSupport(R4S08),
    sleeperSupport(R4S09),
    sleeperSupport(R4S10),
    sleeperSupport(R4S11, true),
    sleeperSupport(R4S12),
    sleeperSupport(R4S13),
    sleeperSupport(R4S14),
    sleeperSupport(R4S15),
    sleeperSupport(R4S16),
    sleeperSupport(R4S17, true),
    sleeperSupport(R4S18),
    sleeperSupport(R4S19),
    sleeperSupport(R4S20),
    sleeperSupport(R4S21),
    sleeperSupport(R4S22),
    sleeperSupport(R4S23),
    sleeperSupport(R4S24, true),
    sleeperSupport(R4S25, true),
    sleeperSupport(R4S26),
    sleeperSupport(R4S27),
    sleeperSupport(R4S28),
    sleeperSupport(R4S29, true),
    sleeperSupport(R4S30),
    sleeperSupport(R4S31),
    sleeperSupport(R4S32, true),
    sleeperSupport(R4S33, true),
    sleeperSupport(R4S34),
    sleeperSupport(R4S35),
    sleeperSupport(R4S36),
    sleeperSupport(R4S37),
    baseSupport()
  );
};

const main = () => {
  return union(difference(sleepers(), rails()), connectors(), supports());
};
