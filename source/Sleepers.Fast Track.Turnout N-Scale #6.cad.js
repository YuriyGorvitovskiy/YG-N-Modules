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
            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              Straight                    Moving R2 and R3                     Fixed R2 and R3     Cross R2 x R3          Straight 
*/

// Sleeper Length
// mm = ROUND((1944 ??? px) ?? 0.08466666667, 2)
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
// mm = ROUND((px - 807) ?? 0.08466666667, 2)
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
  yr, yl ???  +--------+
         |  |        |
         |  |   R1   |
         |  |        |
yl - DRW ???  +--------+
         |  |        |
         |  +--------+
         |
         +???????????????????????????????????????
            xl    xl + DSW
*/
const DR1S_5 = { xl: S_5X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px
const DR1S_3 = { xl: S_3X, yl: 3.89, yr: 3.89 }; // 1898 px, 1898 px
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
      yr ???  |      --+
         |  |   --/  |
      yl ???  +--/     |
         |  |   R2   |
         |  |      --+
         |  |   --/  |
yl - DRW ???  +--/     |
         |  |        |
         |       
         +???????????????????????????????????????
            xl    xl + DSW
*/
const DR2S_5 = { xl: S_5X, yl: 3.89, yr: 3.89 }; //   1898 px, 1898 px
const DR2S_4 = { xl: S_4X, yl: 3.89, yr: 3.89 }; //   1898 px, 1898 px
const DR2S_3 = { xl: S_3X, yl: 3.89, yr: 3.89 }; //   1898 px, 1898 px
const DR2S_2 = { xl: S_2X, yl: 3.89, yr: 3.89 }; //   1898 px, 1898 px
const DR2S_1 = { xl: S_1X, yl: 5.16, yr: 5.16 }; //   1898 px, 1898 px
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
  yr, yl ???  +--------+
         |  |        |
         |  |   R3   |
         |  |        |
yl - DRW ???  +--------+
         |  |        |
         |
         +???????????????????????????????????????
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
      yr ???  |      --+
         |  |   --/  |
      yl ???  +--/     |
         |  |   R4   |
         |  |      --+
         |  |   --/  |
yl - DRW ???  +--/     |
         |  |        |
         |       
         +???????????????????????????????????????
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
const DR4S34 = { xl: S34X, yl: 26.08, yr: 26.33 }; // 1636 px, 1633 px
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
const R1S_3 = drawingToActualShift(DR1S_3, R1D2A_SHIFT);
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

const COS_9D = 0.9877;
const PARALLEL_0D = N_TOP_DISTANCE + MEN55_TOP_WIDTH;
const PARALLEL_9D = PARALLEL_0D / COS_9D;

const shiftRS = (rs, shift) => {
  return { xl: rs.xl, yl: rs.yl + shift, yr: rs.yr + shift };
};

const R2S_1 = shiftRS(R4S_1, DR2S_1.yl - DR4S_1.yl);
const R2S01 = shiftRS(R4S01, DR2S01.yl - DR4S01.yl);
const R2S02 = shiftRS(R4S02, DR2S02.yl - DR4S02.yl);
const R2S03 = shiftRS(R4S03, DR2S03.yl - DR4S03.yl);
const R2S04 = shiftRS(R4S04, DR2S04.yl - DR4S04.yl);
const R2S05 = shiftRS(R4S05, DR2S05.yl - DR4S05.yl);
const R2S07 = shiftRS(R4S07, DR2S07.yl - DR4S07.yl);
const R2S08 = shiftRS(R4S08, DR2S08.yl - DR4S08.yl);
const R2S09 = shiftRS(R4S09, DR2S09.yl - DR4S09.yl);
const R2S10 = shiftRS(R4S10, DR2S10.yl - DR4S10.yl);
const R2S12 = shiftRS(R4S12, DR2S12.yl - DR4S12.yl);
const R2S13 = shiftRS(R4S13, DR2S13.yl - DR4S13.yl);
const R2S14 = shiftRS(R4S14, DR2S14.yl - DR4S14.yl);
const R2S15 = shiftRS(R4S15, DR2S15.yl - DR4S15.yl);
const R2S16 = shiftRS(R4S16, DR2S16.yl - DR4S16.yl);
const R2S18 = shiftRS(R4S18, -PARALLEL_9D);
const R2S19 = shiftRS(R4S19, -PARALLEL_9D);
const R2S20 = shiftRS(R4S20, -PARALLEL_9D);
const R2S21 = shiftRS(R4S21, -PARALLEL_9D);
const R2S22 = shiftRS(R4S22, -PARALLEL_9D);
const R2S23 = shiftRS(R4S23, -PARALLEL_9D);
const R2S26 = shiftRS(R4S26, -PARALLEL_9D);
const R2S27 = shiftRS(R4S27, -PARALLEL_9D);
const R2S28 = shiftRS(R4S28, -PARALLEL_9D);
const R2S30 = shiftRS(R4S30, -PARALLEL_9D);
const R2S31 = shiftRS(R4S31, -PARALLEL_9D);
const R2S34 = shiftRS(R4S34, -PARALLEL_9D);
const R2S35 = shiftRS(R4S35, -PARALLEL_9D);
const R2S36 = shiftRS(R4S36, -PARALLEL_9D);
const R2S37 = shiftRS(R4S37, -PARALLEL_9D);

const R3S_1 = shiftRS(R4S_1, DR1S_1.yl - DR2S_1.yl);
const R3S01 = shiftRS(R4S01, DR1S_1.yl - DR2S01.yl);
const R3S02 = shiftRS(R4S02, DR1S_1.yl - DR2S02.yl);
const R3S03 = shiftRS(R4S03, DR1S_1.yl - DR2S03.yl);
const R3S04 = shiftRS(R4S04, DR1S_1.yl - DR2S04.yl);
const R3S05 = shiftRS(R4S05, DR1S_1.yl - DR2S05.yl);
const R3S07 = shiftRS(R4S07, DR1S_1.yl - DR2S07.yl);
const R3S08 = shiftRS(R4S08, DR1S_1.yl - DR2S08.yl);
const R3S09 = shiftRS(R4S09, DR1S_1.yl - DR2S09.yl);
const R3S10 = shiftRS(R4S10, DR1S_1.yl - DR2S10.yl);
const R3S12 = shiftRS(R4S12, DR1S_1.yl - DR2S12.yl);
const R3S13 = shiftRS(R4S13, DR1S_1.yl - DR2S13.yl);
const R3S14 = shiftRS(R4S14, DR1S_1.yl - DR2S14.yl);
const R3S15 = shiftRS(R4S15, DR1S_1.yl - DR2S15.yl);
const R3S16 = shiftRS(R4S16, DR1S_1.yl - DR2S16.yl);
const R3S18 = shiftRS(R1S18, PARALLEL_0D);
const R3S23 = shiftRS(R1S23, PARALLEL_0D);
const R3S30 = shiftRS(R1S30, PARALLEL_0D);
const R3S37 = shiftRS(R1S37, PARALLEL_0D);

const PROTO_TRACK_GUAGE = 1524;
const MODEL_TRACK_GUAGE = 9;
const MODEL_SCALE = MODEL_TRACK_GUAGE / PROTO_TRACK_GUAGE; // 1:169

const UNITRACK_HEIGHT = 7.2;
const MEN55_HEIGHT = 1.45;
const MEN55_FOOT_HEIGHT = 0.4;
const ROADBAED_HEIGHT = 3.0;
const CONNECTOR_HEIGHT = 1.75;

const SLEEPER_Y_UNDER_RAIL = UNITRACK_HEIGHT - MEN55_HEIGHT - ROADBAED_HEIGHT;

const SLEEPER_X_SLOPE_HEIGHT = 230 * MODEL_SCALE;
const SLEEPER_X_BASE = 300 * MODEL_SCALE;
const SLEEPER_X_TOP = 160 * MODEL_SCALE;

const SLEEPER_Y_TOP_HEIGHT = SLEEPER_Y_UNDER_RAIL + MEN55_FOOT_HEIGHT;
const SLEEPER_Y_SIDE_HEIGHT = SLEEPER_Y_TOP_HEIGHT - 80 * MODEL_SCALE;
const SLEEPER_Y_MIDDLE_HEIGHT = SLEEPER_Y_TOP_HEIGHT - 85 * MODEL_SCALE;

const SLEEPER_Y_TOP_WIDTH = 480 * MODEL_SCALE;
const SLEEPER_Y_SIDE_SLOPE = 300 * MODEL_SCALE;
const SLEEPER_Y_MIDDLE_SLOPE = 240 * MODEL_SCALE;

const sleeperShape = (lenght, tops /* {xl: number, xr: number}[] */) => {
  /*
                           M     L                                           I     H                                  E     D
??? Y3                   ?????????????????????????????????????????????                                   ?????????????????????????????????????????????                          ?????????????????????????????????????????????
???               ????????????????????????             ????????????????????????                     ????????????????????????             ????????????????????????            ????????????????????????             ????????????????????????
??? Y2      N ???????????????                           ?????????????????????????????????????????????????????????????????????                           ??????????????????????????????????????????                           ??????????????? C
???           ???                                   K             J                                   G    F                                   ???
???           ???                                                                                                                              ???
???           ???                                                                                                                              ???
??? Y0      A ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? B

            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
           X0A            X0B   X0C           X0D           X1A            X1B   X1C            X1D  X2A            X2B   X2C            X2D
*/
  const Y0 = 0.0;
  const X0 = 0.0;
  const XL = lenght;
  const dxB = SLEEPER_Y_TOP_WIDTH / 2;
  const dxA = dxB + SLEEPER_Y_MIDDLE_SLOPE;

  const points = tops.flatMap((r) => [
    [r.xl - dxA, SLEEPER_Y_MIDDLE_HEIGHT],
    [r.xl - dxB, SLEEPER_Y_TOP_HEIGHT],
    [r.xr + dxB, SLEEPER_Y_TOP_HEIGHT],
    [r.xr + dxA, SLEEPER_Y_MIDDLE_HEIGHT],
  ]);

  points[0] = [X0, SLEEPER_Y_SIDE_HEIGHT];
  points[1] = [X0 + SLEEPER_Y_SIDE_SLOPE, SLEEPER_Y_TOP_HEIGHT];
  points[points.length - 2] = [XL - SLEEPER_Y_SIDE_SLOPE, SLEEPER_Y_TOP_HEIGHT];
  points[points.length - 1] = [XL, SLEEPER_Y_SIDE_HEIGHT];

  points.push([XL, Y0]);
  points.push([X0, Y0]);

  const shape2D = polygon({ points: points.reverse() });
  const shape3D = linear_extrude({ height: SLEEPER_X_BASE }, shape2D);

  /*
??? Y3        E ????????????????????? D
|            /       \
|           /         \
??? Y1     F ???           ??? C
???          ???           ???
???          ???           ???
???          ???           ???
??? Y0     A ??????????????????????????????????????? B

           ???????????????????????????????????????
           X0 X1    X2 X3
*/

  const X1 = X0 + (SLEEPER_X_BASE - SLEEPER_X_TOP) / 2;
  const X2 = X1 + SLEEPER_X_TOP;
  const X3 = X0 + SLEEPER_X_BASE;
  const Y1 = SLEEPER_Y_TOP_HEIGHT - SLEEPER_X_SLOPE_HEIGHT;
  const Y3 = SLEEPER_Y_TOP_HEIGHT;

  const profile2D = polygon({
    points: [
      [X0, Y0],
      [X3, Y0],
      [X3, Y1],
      [X2, Y3],
      [X1, Y3],
      [X0, Y1],
    ],
  });
  const profile3D = linear_extrude({ height: lenght }, profile2D);

  return intersection(
    shape3D.mirroredX().rotateZ(90).rotateY(90),
    profile3D.rotateX(90)
  ).mirroredY();
};

const sleeper = (length, rails) => {
  const MIN_TOP_DISTANCE = SLEEPER_Y_TOP_WIDTH + 2 * SLEEPER_Y_MIDDLE_SLOPE;
  const tops = [];
  let position = S_5X;
  rails.forEach((r) => {
    let xl = Math.min(r.yl, r.yr);
    let xr = Math.max(r.yl, r.yr);
    if (tops.length == 0 || xl - tops[tops.length - 1].xr > MIN_TOP_DISTANCE) {
      tops.push({ xl, xr });
    } else {
      tops[tops.length - 1].xr = xr;
    }
    if (r.xl > position) {
      position = r.xl;
    }
  });
  return translate([position, 0, 0], sleeperShape(length, tops));
};

const sleepers = () => {
  const GAP_S00 = (3 * DSW) / 2;
  const GAP_DEPTH = SLEEPER_Y_TOP_HEIGHT - CONNECTOR_HEIGHT;

  return difference(
    union(
      sleeper(SL1, [R1S_5, R4S_5]),
      sleeper(SL1, [R1S_5, R4S_4]),
      sleeper(SL1, [R1S_5, R4S_3]),
      sleeper(SL1, [R1S_5, R2S_1, R3S_1, R4S_1]),
      sleeper(SL2, [R1S_5, R2S01, R3S01, R4S01]),
      sleeper(SL2, [R1S_5, R2S02, R3S02, R4S02]),
      sleeper(SL2, [R1S_5, R2S03, R3S03, R4S03]),
      sleeper(SL2, [R1S_5, R2S04, R3S04, R4S04]),
      sleeper(SL2, [R1S_5, R2S05, R3S05, R4S05]),
      sleeper(SL2, [R1S_5, R2S07, R3S07, R4S07]),
      sleeper(SL3, [R1S_5, R2S08, R3S08, R4S08]),
      sleeper(SL3, [R1S_5, R2S09, R3S09, R4S09]),
      sleeper(SL3, [R1S_5, R2S10, R3S10, R4S10]),
      sleeper(SL4, [R1S_5, R2S12, R3S12, R4S12]),
      sleeper(SL4, [R1S_5, R2S13, R3S13, R4S13]),
      sleeper(SL4, [R1S_5, R2S14, R3S14, R4S14]),
      sleeper(SL5, [R1S_5, R2S15, R3S15, R4S15]),
      sleeper(SL5, [R1S_5, R2S16, R3S16, R4S16]),
      sleeper(SL6, [R1S_5, R2S18, R3S18, R4S18]),
      sleeper(SL7, [R1S_5, R2S19, R3S18, R4S19]),
      sleeper(SL7, [R1S_5, R2S20, R3S18, R4S20]),
      sleeper(SL8, [R1S_5, R2S21, R3S18, R4S21]),
      sleeper(SL8, [R1S_5, R2S22, R3S18, R4S22]),
      sleeper(SL9, [R1S_5, R2S23, R3S23, R4S23]),
      sleeper(SL10, [R1S_5, DGR1S26, DGR3S26, DGR2S26, DGR4S26, R4S26]),
      sleeper(SL11, [R1S_5, DGR1S27, DGR3S27, DGR2S27, DGR4S27, R4S26]),
      sleeper(SL11, [R1S_5, DGR1S28, DGR3S28, DGR2S28, DGR4S28, R4S26]),
      sleeper(SL13, [R1S_5, R3S23, R2S30, R4S30]),
      sleeper(SL13, [R1S_5, R3S23, R2S31, R4S31]),
      sleeper(SL15, [R1S_5, R3S23, R2S34, R4S34]),
      sleeper(SL16, [R1S_5, R3S23, R2S35, R4S35]),
      sleeper(SL16, [R1S_5, R3S23, R2S36, R4S36]),
      sleeper(SL17, [R1S_5, R3S23, R2S37, R4S37])
    ),
    cube({
      size: [GAP_S00, SL2, GAP_DEPTH],
    }).translate([-GAP_S00 / 2, 0, CONNECTOR_HEIGHT])
  );
};

const railCut = (top, bottom) => {
  const shift = RAW / 2;
  const topPoints = top.flatMap((p) => [
    [p.xl, p.yl + shift],
    [p.xl + DSW, p.yr + shift],
  ]);
  const bottomPoints = bottom.flatMap((p) => [
    [p.xl, p.yl - shift],
    [p.xl + DSW, p.yr - shift],
  ]);
  const rail2D = polygon({ points: bottomPoints.concat(topPoints.reverse()) });
  return linear_extrude({ height: 1.45 }, rail2D).translate([0, 0, 2.75]);
};

const railCuts = () => {
  const railCut1 = railCut([R1S_5, R1S_3], [R1S_5, R1S_3]);
  const railCut2 = railCut([R4S_5, R4S_3], [R4S_5, R4S_3]);
  const railCut3 = railCut(
    [
      R4S_1,
      R4S01,
      R4S02,
      R4S03,
      R4S04,
      R4S05,
      R4S07,
      R4S08,
      R4S09,
      R4S10,
      R4S12,
      R4S13,
      R4S14,
      R4S15,
      R4S16,
    ],
    [R1S_1, R1S16]
  );

  const railCut4 = railCut([R1S18, R1S23], [R1S18, R1S23]);
  const railCut5 = railCut(
    [R2S18, R2S19, R2S20, R2S21, R2S22, R2S23],
    [R2S18, R2S19, R2S20, R2S21, R2S22, R2S23]
  );
  const railCut6 = railCut([R3S18, R3S23], [R3S18, R3S23]);
  const railCut7 = railCut(
    [R4S18, R4S19, R4S20, R4S21, R4S22, R4S23],
    [R4S18, R4S19, R4S20, R4S21, R4S22, R4S23]
  );
  const railCut8 = railCut([R4S26, R4S27, R4S28], [R1S26, R1S28]);
  const railCut9 = railCut([R1S30, R1S37], [R1S30, R1S37]);
  const railCut10 = railCut([R3S30, R3S37], [R3S30, R3S37]);
  const railCut11 = railCut([R2S30, R2S37], [R2S30, R2S37]);
  const railCut12 = railCut([R4S30, R4S37], [R4S30, R4S37]);
  return union(
    railCut1,
    railCut2,
    railCut3,
    railCut4,
    railCut5,
    railCut6,
    railCut7,
    railCut8,
    railCut9,
    railCut10,
    railCut11,
    railCut12
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
  return linear_extrude({ height: CONNECTOR_HEIGHT }, connector2D);
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
  return union(difference(sleepers(), railCuts()), connectors(), supports());
};
