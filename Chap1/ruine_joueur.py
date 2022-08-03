import pylab as pl
from random import *
from math import *

T, s, nbj, p = [], 0, 3000, 18 / 37
for j in range(1, nbj + 1):
    N, n = 100, 20     
    t = 0
    arrêt = 1
    while arrêt == 1:
        t = t + 1
        if 0 < n < N:
            n = n + 2 * floor(random() + p) - 1
        else:
            arrêt = 0
    s = s + t
    T.append(s / j)

pl.clf()
pl.plot(range(1, nbj + 1), T)

def E(N, n, p):
    r = (1 - p) / p
    return 1 / (1 - 2 * p) * (n - N * (r ** n - 1) / (r ** N - 1))

#pl.axhline(y = E(N, 20, p), color = 'red')
pl.show()